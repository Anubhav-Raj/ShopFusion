const User = require("../models/user");
require("dotenv").config();
const bcrypt = require("bcrypt");
const mailSender = require("../utils/mail-send");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, method } = req.body;
    return console.log(name, email, password, method);
    let user = await User.findOne({ email });
    if (user) {
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: "1h",
      });

      res.status(200).json({
        success: true,
        message: `Welcome, ${user.name}`,
        token,
      });
    } else {
      let hashedPass = "";
      let verified = true;
      let token1 = "";
      if (password !== "none") {
        hashedPass = await bcrypt.hash(password, 12);
        verified = false;
        token1 = uuidv4();
      }
      // console.log("aejfnsj");

      const newUser = new User({
        name: name,
        email: email,
        photo: photo,
        role: role,
        password: hashedPass,
        isVerified: verified,
        token: token1,
      });
      // await newUser.save();
      // console.log(newUser);

      try {
        await newUser.save();
        console.log("User saved successfully");
      } catch (error) {
        console.error("Error saving user:", error);
        // Handle the error appropriately, e.g., send an error response to the client
        res.status(500).json({
          error: error.message,
          message: "Error saving user",
        });
        return; // Make sure to exit the function if there's an error
      }
      if (password !== "none") {
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
          user.email,
          "Verify your email",
          bodypart
        );
      }

      // Generate JWT token for the new user
      const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
        expiresIn: "1h",
      });

      res.json({
        savedUser,
        message: "Signup Sucessfully",
        token, // Include the generated token in the response
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Login Faild",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password, method } = req.body;
  return console.log(email, password, method);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json({
        isError: true,
        message: "Not email found!",
      });
    }

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
      return res.render("signin", {
        email: "",
        password: "",
        message: "Something went wrong!",
      });
    }
    if (!user.isVerified) {
      return res.render("signin", {
        email: "",
        password: "",
        message: "Verify your mail!",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      isError: false,
      message: `Welcome, ${user.name}`,
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

exports.createMobile = async (req, res) => {
  console.log(req.body);
  const { recaptchaToken } = req.body;
  let success = true;
  const SECRET_KEY_v3 = "6LfplmApAAAAAIoOHdbF-BquBwgjBFakSq5bxPFg";
  const recaptchaResponse = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY_v3}&response=${recaptchaToken}`
  );

  if (
    !recaptchaResponse.data.success ||
    recaptchaResponse.data.score < 0.5 ||
    recaptchaResponse.data.action !== "login"
  ) {
    success = false;
  }

  // Authenticate with email and password

  return {
    valid: success,
  };
  // console.log(req.body);
  // console.log(req.files);
  // res.send({ name: "anubhav" });
};
exports.addaddress = (req, res) => {
  console.log(req.body);
  console.log(req.files);
  res.send({ name: "address" });
};
