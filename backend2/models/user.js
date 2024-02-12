const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  photo: {
    type: String,
    //required: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  otpemail: {
    type: String,
  },
  otpnumeber: {
    type: String,
  },
  token: {
    type: String,
  },
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

// Create the User model
module.exports = mongoose.model("User", userSchema);
