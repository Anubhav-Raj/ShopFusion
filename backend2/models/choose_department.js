const mongoose = require("mongoose");

// Define the user schema
const cDSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    desc: String,
    choose_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseType",
    },
  },
  {
    timestamps: true,
  }
);

// Create the User model
module.exports = mongoose.model("ChooseDepartment", cDSchema);
