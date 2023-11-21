const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  ],
  email: String,
  token: String,
  password: String,
  profile: {
    type: String,
    default: "no",
  },
  isProfileComplete: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
