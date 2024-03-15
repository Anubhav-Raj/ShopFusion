const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
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
  provider: {
    type: String,
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
userSchema.methods.comparePasswords = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create the User model
module.exports = mongoose.model("User", userSchema);
