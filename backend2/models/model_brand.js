const mongoose = require("mongoose");

// Define the user schema
const brandSchema = new mongoose.Schema(
  {
    name: String,
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
  },
  {
    timestamps: true,
  }
);

// Create the User model
module.exports = mongoose.model("ModelBrand", brandSchema);
