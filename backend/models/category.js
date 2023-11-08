// creating models of category of ecommerce

const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: String,
  issub: Boolean,
  sub: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  img: String,
  isend: Boolean,
});

module.exports = mongoose.model("Category", categorySchema);
