const mongoose = require("mongoose");

// Define the user schema
const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
    selectedCountry: String,
    phoneNumber: String,
    selectedState: String,
    district: String,
    subDistrict: String,
    landmark: String,
    areaStreetVillage: String,
    flatHouseNo: String,
    pincode: String,
    gstNumber: String,
    email: String,
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
const User = mongoose.model("Address", addressSchema);

// Export the User model
module.exports = User;
