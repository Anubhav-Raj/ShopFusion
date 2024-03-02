const mongoose = require("mongoose");

// Define the user schema
const paymentSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    paymentID: String,
    signature: String,
    amount: Number,
    orderID: String,
    status: Boolean,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
// Create the Product model
module.exports = mongoose.model("Payment", paymentSchema);
