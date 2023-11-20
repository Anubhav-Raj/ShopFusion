const db = require("./db/db.js");
db.connectDB();
const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/files", express.static("uploads"));

app.get("/", async (req, res, next) => {
  res.send("Hello From Express default route");
});
app.get("/dashboard", async (req, res, next) => {
  res.render("dashboard");
});
app.get("/brandfrom", async (req, res, next) => {
  res.render("brand_storePage");
});
app.get("/addMobileProduct", async (req, res, next) => {
  res.render("addMobileProduct");
});
app.get("/signin", async (req, res, next) => {
  res.render("signin");
});
app.get("/signup", async (req, res, next) => {
  res.render("signup");
});

//  Routes
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Runing on Port ${PORT}`);
});
