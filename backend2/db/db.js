const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();
//process.env.MONGO_ONLINE
//shopfusion
//mongodb://0.0.0.0:27017/
mongoose
  .connect("mongodb://0.0.0.0:27017/", {
    //dbName: "shopfusion",
    dbName: "mzone",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected");
});
