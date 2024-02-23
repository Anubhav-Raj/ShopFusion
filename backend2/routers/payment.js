const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/is_logged_in");
const userCon = require("../controllers/user");

router.post("/otppayment", userCon.payment);
router.post("/paymentverification", userCon.paymentVerification);

module.exports = router;
