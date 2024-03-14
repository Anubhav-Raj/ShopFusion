require("./db/db.js");
const express = require("express");
const cors = require("cors");
const userRouters = require("./routers/user");
const productRouters = require("./routers/product.js");
const paymentRouters = require("./routers/payment.js");
const adminRouters = require("./routers/admin.js");
const sessionRouter = require("./routers/sessions.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// console.log(port);
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// 4. Cors
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/files", express.static("uploads/images"));
app.use("/uploads", express.static("uploads"));

// Define routes

app.use("/api/user", userRouters);
app.use("/api/product", productRouters);
app.use("/api/payment", paymentRouters);
app.use("/api/admin", adminRouters);
app.use("/api/sessions", sessionRouter);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
