const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.EMAIL_ADMIN,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "ShopFusion",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log("Email sent successfully!");
    // console.log(info); // Log the info object for more details
    return info;
  } catch (error) {
    console.log("Error sending email:", error.message);
  }
};

module.exports = mailSender;
