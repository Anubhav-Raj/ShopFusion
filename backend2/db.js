const mongoose = require("mongoose");
const uri = "mongodb://0.0.0.0:27017";
mongoose.set("strictQuery", true);

const connectDB = () => {
  mongoose
    .connect(uri, {
      dbName: "mydatabase",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => console.log(err.message));

  mongoose.connection.on("connected", () => {
    console.log("Mongoose Connected to db");
  });
};

module.exports = connectDB;
