const User = require("../models/user");
require("dotenv").config();
const bcrypt = require("bcrypt");
const mailSender = require("../utils/mail-send");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const Address = require("../models/address");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const AddressPayment = require("../models/address_payment");
const AppError = require("../utils/AppError");
const {
  getGoogleOauthToken,
  getGoogleUser,
} = require("../services/session.service");
const { findAndUpdateUser, signToken } = require("../services/user.service");
const origin = process.env.ORIGIN;
const {
  findAllUsers,
  findUser,
  createUser,
} = require("../services/user.service");
const redisClient = require("../utils/connectRedis");

// Cookie options
const accessTokenCookieOptions = {
  expires: new Date(Date.now() + process.env.accessTokenExpiresIn * 60 * 1000),
  maxAge: process.env.accessTokenExpiresIn * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

const refreshTokenCookieOptions = {
  expires: new Date(Date.now() + process.env.refreshTokenExpiresIn * 60 * 1000),
  maxAge: process.env.refreshTokenExpiresIn * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

exports.googleOauthHandler = async (req, res, next) => {
  try {
    // Get the code from the query
    const code = req.query.code;
    const pathUrl = req.query.state || "/";
    if (!code) {
      return next(new AppError("Authorization code not provided!", 401));
    }

    // Use the code to get the id and access tokens
    const { id_token, access_token } = await getGoogleOauthToken({ code });

    const { name, verified_email, email, picture } = await getGoogleUser({
      id_token,
      access_token,
    });

    // Check if user is verified
    if (!verified_email) {
      return next(new AppError("Google account not verified", 403));
    }

    // Update user if user already exists or create new user
    const user = await findAndUpdateUser(
      { email },
      {
        name,
        photo: picture,
        email,
        provider: "Google",
        verified: true,
      },
      { upsert: true, runValidators: false, new: true, lean: true }
    );

    if (!user) {
      res.redirect(`${origin}${pathUrl}`);
    }
    // Create access and refresh token
    const { access_token: accessToken, refresh_token } = await signToken(user);
    // Send cookie
    res.cookie("access_token", accessToken, accessTokenCookieOptions);
    res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    res.redirect(`${origin}${pathUrl}`);
  } catch (err) {
    console.log("Failed to authorize Google User", err);
  }
};

exports.registerHandler = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      console.log("Email already exist! ");
      return res.status(500).json({
        isError: true,
        message: "Email already exist!",
      });
    }

    let hashedPass = "";
    let token1 = "";

    hashedPass = await bcrypt.hash(password, 12);

    token1 = uuidv4();
    console.log(token1);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPass,
      isVerified: false,
      provider: "mail",
      token: token1,
      photo:
        "https://images.generated.photos/fy2Uo9U5gRzrs8gikNUxmi0A31SU47CRIL7AxpFhmnQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMxMjYyLmpwZw.jpg",
    });

    const savedUser = await newUser.save();
    delete savedUser.password;

    const uri = `${process.env.BACKEND_URL}/api/user/verifyUser/${newUser._id}/${token1}`;
    const bodypart = ` <table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border-collapse: collapse;">
            <tr>
              <td style="background-color: #fff; padding: 20px; text-align: center;">
                <h1 style="color: #7c3aed;">Hello ${newUser.name}</h1>
                <h3>Click on the button below to verify your email</h3>
                <a href="${uri}" style="background-color: #7c3aed; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; display: inline-block;">Click here to verify</a>
              </td>
            </tr>
          </table>
            </body>
          </html>`;

    const callFun = await mailSender(
      newUser.email,
      "Verify your email",
      bodypart
    );

    res.json({
      savedUser,
      message: "Signup Sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
      message: "Login Failda",
    });
  }
};

exports.loginHandler = async (req, res, next) => {
  try {
    // Get the user from the collection
    const user = await findUser({ email: req.body.email });
    if (!user) {
      res.status(402).json({
        isError: true,
        message: "Email is  Not Register !!",
      });
    }
    if (user.isVerified == false) {
      res.status(402).json({
        isError: true,
        message: "Email is Not verified !!",
      });
    }
    // Check if user exists and password is correct
    if (!user || !(await user.comparePasswords(req.body.password))) {
      res.status(402).json({
        isError: true,
        message: "Password  is Not Correct !!",
      });
    }

    // Create the Access and refresh Tokens
    const { access_token, refresh_token } = await signToken(user);

    // Send Access Token in Cookie
    res.cookie("access_token", access_token, accessTokenCookieOptions);
    res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    // Send Access Token
    res.status(200).json({
      status: "success",
      access_token,
    });
  } catch (err) {
    next(err);
  }
};

const logout = (res) => {
  res.cookie("access_token", "", { maxAge: 1 });
  res.cookie("refresh_token", "", { maxAge: 1 });
  res.cookie("logged_in", "", { maxAge: 1 });
};

exports.logoutHandler = async (req, res, next) => {
  try {
    const user = res.locals.user;
    await redisClient.del(String(user._id));
    logout(res);
    res.status(200).json({ status: "success" });
  } catch (err) {
    next(err);
  }
};

exports.refreshAccessTokenHandler = async (req, res, next) => {
  try {
    // Get the refresh token from cookie
    const refresh_token = req.cookies.refresh_token;

    // Validate the Refresh token
    const decoded = verifyJwt(refresh_token, "refreshTokenPublicKey");

    const message = "Could not refresh access token";
    if (!decoded) {
      return next(new AppError(message, 403));
    }

    // Check if the user has a valid session
    const session = await redisClient.get(decoded.sub);
    if (!session) {
      return next(new AppError(message, 403));
    }

    // Check if the user exists
    const user = await findUserById(JSON.parse(session)._id);

    if (!user) {
      return next(new AppError(message, 403));
    }

    // Sign new access token
    const access_token = signJwt({ sub: user._id }, "accessTokenPrivateKey", {
      expiresIn: `${config.get("accessTokenExpiresIn")}m`,
    });

    // Send the access token as a cookie
    res.cookie("access_token", access_token, accessTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    // Send response
    res.status(200).json({
      status: "success",
      access_token,
    });
  } catch (err) {
    next(err);
  }
};

exports.getMeHandler = (req, res, next) => {
  try {
    const user = res.locals.user;
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllUsersHandler = async (req, res, next) => {
  try {
    const users = await findAllUsers();
    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    next(err);
  }
};

//module.exports = googleOauthHandler;

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // return console.log(name, email, password);
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(500).json({
        isError: true,
        message: "Email already exist!",
      });
    }

    let hashedPass = "";
    let token1 = "";

    hashedPass = await bcrypt.hash(password, 12);

    token1 = uuidv4();

    const newUser = new User({
      name: name,
      email: email,

      password: hashedPass,
      isVerified: false,
      token: token1,
    });
    // await newUser.save();
    console.log(newUser);
    const savedUser = await newUser.save();
    const uri = `${process.env.BACKEND_URL}/api/user/verifyUser/${newUser._id}/${token1}`;

    const bodypart = ` <table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border-collapse: collapse;">
            <tr>
              <td style="background-color: #fff; padding: 20px; text-align: center;">
                <h1 style="color: #7c3aed;">Hello ${newUser.name}</h1>
                <h3>Click on the button below to verify your email</h3>
                <a href="${uri}" style="background-color: #7c3aed; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; display: inline-block;">Click here to verify</a>
              </td>
            </tr>
          </table>
            </body>
          </html>`;

    const callFun = await mailSender(
      newUser.email,
      "Verify your email",
      bodypart
    );
    console.log(callFun);

    // Generate JWT token for the new user
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
      expiresIn: "1d",
    });
    console.log("token", token);

    res.json({
      savedUser,
      message: "Signup Sucessfully",
      token, // Include the generated token in the response
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
      message: "Login Failda",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  //console.log(email, password);
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(500).json({
        isError: true,
        message: "Not email found!",
      });
    }

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
      return res.status(500).json({
        isError: true,
        message: "Wrong password!",
      });
    }
    if (!user.isVerified) {
      return res.status(500).json({
        isError: true,
        message: "Verify your email!",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      isError: false,
      message: `Welcome, ${user.name}`,
      name: user.name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      isError: true,
    });
  }
};

exports.verifyUser = async (req, res) => {
  try {
    const { token, id } = req.params;
    console.log(token, id);
    const user = await User.findById(id);
    console.log(user);
    if (!user) {
      return res.status(404).send({
        token: "Something went wrong!",
      });
    }
    if (user.token == "" || user.token !== token) {
      return res.status(404).send({
        token: "Something went wrong!",
      });
    }
    user.token = "";
    user.isVerified = true;
    await user.save();

    // res.json({
    //   message: "Verified Sucessfully",
    //   token, // Include the generated token in the response
    // });
    res.redirect("/login");
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Verify Faild",
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    return res.status(200).send({
      isError: false,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send({
        token,
        isError: true,
        message: "Email not found!",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });
    const uri = `${process.env.FRONTEND_URL}/user/resetPassword/${user._id}/${token}`;
    const bodypart = ` <table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border-collapse: collapse;">

            <tr>
              <td style="background-color: #fff; padding: 20px; text-align: center;">
                <h1 style="color: #7c3aed;">Hello ${user.name}</h1>
                <h3>Click on the button below to reset your password</h3>
                <a href="${uri}" style="background-color: #7c3aed; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; display: inline-block;">Click here to reset</a>
              </td>
            </tr>
          </table>
            </body>
          </html>`;
    const callFun = await mailSender(
      user.email,
      "Reset your password",
      bodypart
    );
    res.json({
      message: "Email sent successfully!",
      isError: false,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Verify Faild",
    });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    // from jwt get id which is in toke
    const decode = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decode.id);
    if (!user) {
      return res.status(404).send({
        token: "Something went wrong!",
      });
    }
    user.token = "";

    user.password = await bcrypt.hash(password, 12);

    await user.save();
    res.json({
      message: "Password reset successfully!",
      isError: false,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Verify Faild",
    });
  }
};

exports.addaddress = async (req, res) => {
  try {
    // console.log(req.body);
    const loginuser = res.locals.user;
    const {
      selectedCountry,
      userName,
      phoneNumber,
      selectedState,
      district,
      subDistrict,
      landmark,
      areaStreetVillage,
      flatHouseNo,
      pincode,
      gstNumber,
      email,
      altNumber,
    } = req.body;
    const newAddress = new Address({
      user: loginuser._id,
      userName: userName,
      selectedCountry: selectedCountry,
      phoneNumber: { phoneNumber: phoneNumber },
      selectedState: selectedState,
      district: district,
      subDistrict: subDistrict,
      landmark: landmark,
      areaStreetVillage: areaStreetVillage,
      flatHouseNo: flatHouseNo,
      pincode: pincode,
      gstNumber: gstNumber,
      altNumber: { altNumber: altNumber },
      email: { email: email },
    });
    await newAddress.save();
    const user = await User.findById(loginuser._id).select("-password");
    user.addresses.push(newAddress._id);
    await user.save();

    res.status(200).json({
      message: "Address added successfully!",
      isError: false,
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
      message: "Verify Faild",
      isError: true,
    });
  }
};

exports.getuserAddress = async (req, res) => {
  try {
    const loginuser = res.locals.user;
    const address = await Address.find({ user: loginuser._id });
    res.status(200).json({
      message: "Address Fetch !",
      isError: false,
      address: address,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Faild to fech Address",
      isError: true,
    });
  }
};

exports.isNumberUnique = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    // console.log(phoneNumber);
    // in phone or alt phone number
    const address = await Address.findOne({
      $or: [
        { "phoneNumber.phoneNumber": phoneNumber },
        { "altNumber.altNumber": phoneNumber },
      ],
    });
    //console.log(address);
    if (address) {
      return res.status(200).json({
        isError: true,
      });
    } else {
      return res.status(200).json({
        isError: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
      isError: true,
      message: "Verify Faild",
    });
  }
};

//otp verfication  with email

exports.sendEmailOtp = async (req, res) => {
  try {
    const { email, id } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);
    const address = await Address.findById(id);
    address.email.otp = otp;
    await address.save();
    const bodypart = ` <table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border-collapse: collapse;">

            <tr>
              <td style="background-color: #fff; padding: 20px; text-align: center;">
                <h1 style="color: #7c3aed;">Hello</h1>
                <h3>Your OTP is ${otp}</h3>
              </td>
            </tr>
          </table>
            </body>
          </html>`;
    const callFun = await mailSender(email, "OTP for verification", bodypart);
    res.json({
      message: "Email sent successfully!",
      isError: false,
      otp,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Verify Faild",
    });
  }
};

exports.verifyEmailOtp = async (req, res) => {
  try {
    const { id, otp } = req.body;
    const address = await Address.findById(id);

    if (address.email.otp != otp) {
      return res.status(404).send({
        token: "Invalid OTP!",
        isError: true,
        message: "Wrong OTP",
      });
    }
    address.email.otp = "";
    address.email.isVerified = true;
    await address.save();
    res.status(200).json({
      message: "Email verified successfully!",
      isError: false,
      data: address,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Verify Faild",
    });
  }
};

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

exports.payment = async (req, res) => {
  try {
    const payment_capture = 1;
    let amount = 1;
    var currency = "INR"; // apply  condition accoding to country

    const address = await Address.findById(req.body.addressId);
    // console.log(address);
    if (address.selectedCountry === "India") {
      currency = "INR";
    } else {
      currency = "USD";
    }

    const options = {
      amount: amount * 100,
      currency,
      receipt: "receipt_order_for_address_payment",
      payment_capture,
    };

    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.paymentVerification = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    console.log(isAuthentic);
    if (isAuthentic) {
      // Database operations here
      const address = await Address.findById(req.body.addressId);
      var amount = 1;

      const p = new AddressPayment({
        address: req.body.addressId,
        paymentID: razorpay_payment_id,
        signature: razorpay_signature,
        amount: amount,
        orderID: razorpay_order_id,
        status: true,
      });
      await p.save();
      address.payment = p._id;
      address.status = true;
      await address.save();

      res.status(200).json({
        success: true,
        redirectUrl: `${process.env.FRONTEND_URL}/paymentsuccess?reference=${razorpay_payment_id}`,
      });
    } else {
      res.status(200).json({
        success: false,
        redirectUrl: `${process.env.FRONTEND_URL}/paymentfail?reference=${razorpay_payment_id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
