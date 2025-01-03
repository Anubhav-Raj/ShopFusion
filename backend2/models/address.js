const mongoose = require("mongoose");

// Define the user schema
const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    userName: String,
    selectedCountry: String,
    phoneNumber: {
      phoneNumber: String,
      isVerified: {
        type: Boolean,
        default: false,
      },
      show: {
        type: Boolean,
        default: true,
      },
    },
    altNumber: {
      altNumber: String,
      isVerified: {
        type: Boolean,
        default: false,
      },
      show: {
        type: Boolean,
        default: true,
      },
    },
    selectedState: String,
    district: String,
    subDistrict: String,
    landmark: String,
    areaStreetVillage: String,
    flatHouseNo: String,
    pincode: String,
    gstNumber: String,
    email: {
      email: String,
      isVerified: {
        type: Boolean,
        default: false,
      },
      otp: String,
      show: {
        type: Boolean,
        default: true,
      },
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: false,
    },

    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddressPayment",
    },
  },
  {
    timestamps: true,
  }
);

// Create the User model
module.exports = mongoose.model("Address", addressSchema);
