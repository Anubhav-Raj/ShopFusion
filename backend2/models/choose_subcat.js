const mongoose = require("mongoose");

// Define the user schema
const cSCSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    choose_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseCategory",
    },
  },
  {
    timestamps: true,
  }
);

// Create the User model
module.exports = mongoose.model("ChooseSubCategory", cSCSchema);
