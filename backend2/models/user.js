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
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;