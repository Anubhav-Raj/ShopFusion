const mongoose = require("mongoose");

// Define the department schema
const departmentSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    desc: String,
    choose_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChooseType",
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChooseCategory",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create the Department model
module.exports = mongoose.model("ChooseDepartment", departmentSchema);
