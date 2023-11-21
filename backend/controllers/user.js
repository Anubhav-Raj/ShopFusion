const User = require("../models/user");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const mailSender = require("../utils/mail-send");
exports.getSignUp = (req, res) => {
  res.render("signup", {
    name: "",
    email: "",
    password: "",
    message: "",
  });
};

exports.postSignup = async (req, res) => {
  const { email, name, password } = req.body;
  const u = await User.findOne({ email: email });

  if (u) {
    return res.render("signup", {
      name: name,
      email: email,
      password: password,
      message: "User with this mail already exist!",
    });
  }

  const hashedPass = await bcrypt.hash(password, 12);
  const token = uuidv4();
  const user = User({
    email: email,
    password: hashedPass,
    name: name,
    token: token,
  });

  await user.save();

  const uri = `${process.env.BACKEND_URL}/verifyUser/${user._id}/${token}`;

  const bodypart = ` <table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border-collapse: collapse;">
  <tr>
    <td style="background-color: #fff; padding: 20px; text-align: center;">
      <h1 style="color: #7c3aed;">Hello ${user.name}</h1>
      <h3>Click on the button below to verify your email</h3>
      <a href="${uri}" style="background-color: #7c3aed; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; display: inline-block;">Click here to verify</a>
    </td>
  </tr>
</table>
  </body>
</html>`;

  const callFun = await mailSender(user.email, "Verify your email", bodypart);

  res.redirect("/signin");
};

exports.getSignin = (req, res) => {
  res.render("signin", {
    message: "",
    password: "",
    email: "",
  });
};
exports.postSignin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne(email);
  if (!user) {
    return res.render("signin", {
      email: email,
      password: password,
      message: "Something wen wrong!",
    });
  }
  if (bcrypt.compare(password, guide.password)) {
    return res.render("signin", {
      email: "",
      password: "",
      message: "Something wen wrong!",
    });
  }
  var userType = "user";
  if (email === "admin@shopfusion.com") {
    userType = "admin";
  }
  res.render("dashboard", {
    user: user,
    userType: userType,
  });
};

exports.verifyUsr = async (req, res) => {
  const { id, token } = req.params;

  const user = await User.findOne({ _id: id, token: token });
  if (!user) {
    return res.status(404).send({
      token: "Somethin went wrong!",
    });
  }
  user.token = "";
  user.verified = true;
  await user.save();

  res.redirect("/signin");
};
