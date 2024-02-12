const mongoose = require("mongoose");

// Define the user schema
const brandSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

// Create the User model
module.exports = mongoose.model("Brand", brandSchema);
