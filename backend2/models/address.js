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
    },
    altNumber: {
      altNumber: String,
      isVerified: {
        type: Boolean,
        default: false,
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
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create the User model
module.exports = mongoose.model("Address", addressSchema);
