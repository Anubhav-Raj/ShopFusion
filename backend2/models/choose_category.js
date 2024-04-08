const mongoose = require("mongoose");

// Define the user schema
const cCSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    desc: String,
    choose_department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseDepartment",
    },
    subcategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChooseSubCategory",
      },
    ],
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
module.exports = mongoose.model("ChooseCategory", cCSchema);
