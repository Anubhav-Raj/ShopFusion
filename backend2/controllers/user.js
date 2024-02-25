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

    // console.log("aejfnsj");

    const newUser = new User({
      name: name,
      email: email,

      password: hashedPass,
      isVerified: false,
      token: token1,
    });
    // await newUser.save();
    // console.log(newUser);
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

    // Generate JWT token for the new user
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
      expiresIn: "1d",
    });

    res.json({
      savedUser,
      message: "Signup Sucessfully",
      token, // Include the generated token in the response
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
      message: "Login Faildssa",
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
    const user = await User.findById(id);
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

    res.json({
      savedUser,
      message: "Verified Sucessfully",
      token, // Include the generated token in the response
    });
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
      user: req.user._id,
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
    const user = await User.findById(req.user._id).select("-password");
    user.addresses.push(newAddress._id);
    await user.save();

    res.json({
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
  key_id: "rzp_test_AjDOUl6GpeumxG",
  key_secret: "XBEo1dlSMj06gL9KEwlMxBZj",
});

exports.payment = async (req, res) => {
  try {
    console.log(req.body);
    const payment_capture = 1;
    const amount = 1;
    const currency = "INR"; // apply  condition accoding to country

    const options = {
      amount: amount * 100,
      currency,
      receipt: "receipt_order_74394",
      payment_capture,
    };

    const response = await razorpay.orders.create(options);
    //console.log(response);
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
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "XBEo1dlSMj06gL9KEwlMxBZj")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  console.log(isAuthentic);
  if (isAuthentic) {
    // Database comes here

    // await Payment.create({
    //   razorpay_order_id,
    //   razorpay_payment_id,
    //   razorpay_signature,
    // });

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.redirect(
      `http://localhost:3000/paymentfail?reference=${razorpay_payment_id}`
    );
    res.status(400).json({
      success: false,
    });
  }
};
