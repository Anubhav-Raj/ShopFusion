const mongoose = require("mongoose");

// Define the user schema
const brandSchema = new mongoose.Schema(
  {
    name: String,
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    image: {
      String,
      default:
        "https://png.pngtree.com/png-clipart/20230816/original/pngtree-ice-berg-logo-template-vector-symbol-hidden-rock-flat-vector-picture-image_10863822.png",
    },
  },
  {
    timestamps: true,
  }
);

// Create the User model
module.exports = mongoose.model("ModelBrand", brandSchema);
