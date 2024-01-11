const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "Please enter ID"],
  },
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
  role: {
    type: String,
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
