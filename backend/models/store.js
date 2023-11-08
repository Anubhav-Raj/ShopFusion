const mongoose = require("mongoose");

const storeSchema = mongoose.Schema({
  name: String,
  img: String,
  domain: String,
});

module.exports = mongoose.model("Store", storeSchema);
