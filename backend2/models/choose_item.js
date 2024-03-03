const mongose = require("mongoose");
const itemSchema = new mongose.Schema({
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
  },
  choose_category_id: {
    type: mongose.Schema.Types.ObjectId,
    ref: "ChooseCategory",
  },
});
module.exports = mongose.model("ChooseItem", itemSchema);
