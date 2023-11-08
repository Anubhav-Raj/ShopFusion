// create products model

const mongoose = require("mogoose");

const productSchema = mongoose.Schema({
  name: String,
  findAt: [
    {
      type: mongoose.type.ObjectId,
      ref: "ProductAt",
    },
  ],
  brand: {
    type: mongoose.type.ObjectId,
    ref: "Brand",
  },
  available: Boolean,
  variants: [
    {
      type: mongoose.type.ObjectId,
    },
  ],
  img: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
