const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  name: String,
  img: String,
});

module.exports = mongoose.model("Brand", brandSchema);
