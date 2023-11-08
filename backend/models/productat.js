const mongoose = require("mongoose");

const produtctHistorySchema = mongoose.Schema({
  priceHistory: [{ price: Number, date: Date }],
  brand: {
    type: mongoose.Types.ObjectId,
    ref: "Brand",
  },
});

module.exports = mongoose.model("ProductAt", produtctHistorySchema);
