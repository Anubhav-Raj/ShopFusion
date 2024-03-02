const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/is_logged_in");
const userCon = require("../controllers/user");
const productCon = require("../controllers/product");

router.post("/otppayment", userCon.payment);
router.post("/paymentverification", userCon.paymentVerification);
router.post("/productpayment", protect, productCon.payment);
router.post("/mobilepaymentverification", productCon.paymentVerification);

module.exports = router;
