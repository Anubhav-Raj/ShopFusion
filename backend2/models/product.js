const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseType",
      //required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseDepartment",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseCategory",
      // required: true,
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseSubCategory",
      // required: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseItem",
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
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
    yearOfPurchase: String,
    availableQuantity: {
      type: Number,
      default: 0,
      min: 0,
    },
    minimumOrder: {
      type: Number,
      default: 1,
      min: 1,
    },
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
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for frequently queried fields
productSchema.index({ category: 1, subCategory: 1 });

// Create the Product model
module.exports = mongoose.model("Product", productSchema);
