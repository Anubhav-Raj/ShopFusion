const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema(
  {
    category: String,
    subCategory: String,
    price: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: Array,
      default: [],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    sellerType: String,
    sellerName: String,
    gstNumber: String,
    color: String,
    selectBrand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    selectModel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ModelBrand",
    },
    mobileName: String,
    condition: String,
    yearOfPurchase: {
      type: String,
    },
    availableQuantity: Number,
    minimumOrder: Number,

    paymentMode: String,
    serviceMode: String,
    enterAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    googleDriveLink: String,
    mobileDescription: String,
    images: {
      type: Array,
      default: [],
    },
    file: {
      type: String,
      default: "",
    },
    video: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create the Product model
module.exports = mongoose.model("Product", productSchema);
