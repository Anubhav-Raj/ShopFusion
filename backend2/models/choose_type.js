const mongoose = require("mongoose");

// Define the user schema
const chooseTypeSchema = new mongoose.Schema(
  {
    name: String,
    desc: String,
  },
  {
    timestamps: true,
  }
);

// Create the User model
module.exports = mongoose.model("ChooseType", chooseTypeSchema);
