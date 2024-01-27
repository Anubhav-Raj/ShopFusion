require("./db/db.js");
const express = require("express");
const cors = require("cors");
const userRouters = require("./routers/user");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/files", express.static("uploads/images"));
// Define routes

app.use("/api/user", userRouters);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});