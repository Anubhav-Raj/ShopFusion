const express = require("express");
const router = express.Router();
const userCon = require("../controllers/user");
const { protect } = require("../middleware/is_logged_in");

router.post("/signup", userCon.signup);
router.post("/login", userCon.login);
router.post("/userbyid", protect, userCon.getUserById);

router.get("/verifyUser/:id/:token", userCon.verifyUser);
router.post("/createMobile", userCon.createMobile);
module.exports = router;
