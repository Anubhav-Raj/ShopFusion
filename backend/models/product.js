// create products model

const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    brands: {
      type: mongoose.Types.ObjectId,
      ref: "BrandStore",
    },

    stores: [
      {
        type: mongoose.Types.ObjectId,
        ref: "BrandStore",
      },
    ],
    images: [{ type: String }],
    availability: String,
    launchedwithin: String,
    description: String,
    priceAt: [
      {
        store: {
          type: mongoose.Types.ObjectId,
          ref: "BrandStore",
        },
        price: String,
        link: String,
      },
    ],
    ScreenSize: String,
    Display: String,
    Design: String,
    ScreenResolution: String,
    FrontCamera: String,

    RearCamera: String,

    CPU: String,

    RAM: String,

    BatterySize: String,

    AndroidVersion: String,

    InbuiltMemory: String,
    AspectRatio: String,
    RefreshRate: String,

    CPUManufacturer: String,

    GPUManufacturer: String,
    features: [
      {
        title: String,
        keyPair: [
          {
            key: String,
            value: String,
          },
        ],
      },
    ],
    price: String,
    SellAddress: [{ type: String }],
    Category: String,
    UsedTime: String,
    variants: [
      {
        type: mongoose.Types.ObjectId,
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
