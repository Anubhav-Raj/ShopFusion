const mongoose = require("mongoose");

const brandSchema = mongoose.Schema(
  {
    name: String,
    img: String,
    type: String,
    link: String,
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BrandStore", brandSchema);
