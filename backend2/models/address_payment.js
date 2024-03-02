const mongoose = require("mongoose");

// Define the user schema
const paymentSchema = new mongoose.Schema(
  {
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
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
module.exports = mongoose.model("AddressPayment", paymentSchema);
// above is the code for the payment model for address payment as it may fututre can get change so i have created a new model for the payment and address
