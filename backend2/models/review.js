const mongoose = require("mongoose");

// Define the product schema
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    rating: Number,
    text: String,
  },
  {
    timestamps: true,
  }
);

// Create the reviewSchema model
module.exports = mongoose.model("Review", reviewSchema);
