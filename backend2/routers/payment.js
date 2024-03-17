const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/is_logged_in");
const userCon = require("../controllers/user");
const productCon = require("../controllers/product");
const { deserializeUser } = require("../middleware/deserializeUser");

router.post("/otppayment", deserializeUser, userCon.payment);
router.post(
  "/addresspaymentverification",
  deserializeUser,
  userCon.paymentVerification
);
router.post("/productpayment", deserializeUser, productCon.payment);
router.post(
  "/mobilepaymentverification",
  deserializeUser,
  productCon.paymentVerification
);

module.exports = router;
