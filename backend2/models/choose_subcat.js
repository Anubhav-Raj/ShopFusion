const mongoose = require("mongoose");

// Define the user schema
const cSCSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    desc: String,
    choose_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseCategory",
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChooseProduct",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create the User model
module.exports = mongoose.model("ChooseSubCategory", cSCSchema);
