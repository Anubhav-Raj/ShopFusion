const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_ONLINE, {
    dbName: "shopfusion",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected");
});
