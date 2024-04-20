const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
    },
    category_ID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChooseCategory",
      },
    ],
    department_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseDepartment",
    },
    subCategory_ID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChooseSubCategory",
      },
    ],
    image: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Brand", brandSchema);
