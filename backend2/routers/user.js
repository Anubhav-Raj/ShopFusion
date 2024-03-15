const express = require("express");
const router = express.Router();
const userCon = require("../controllers/user");
const { protect } = require("../middleware/is_logged_in");
const more_upload = require("../utils/more_upload");
const { deserializeUser } = require("../middleware/deserializeUser");
const { requireUser } = require("../middleware/requireUser");
router.get("/me", deserializeUser, userCon.getMeHandler);
router.get("/logout", deserializeUser, requireUser, userCon.logoutHandler);
router.post("/register", userCon.registerHandler);
router.post("/login", userCon.loginHandler);
router.get("/refresh", userCon.refreshAccessTokenHandler);

router.post("/signup", userCon.signup);
router.post("/forgotpassword", userCon.forgotPassword);
router.post("/resetpassword", userCon.resetPassword);
router.post("/userbyid", protect, userCon.getUserById);

router.get("/verifyUser/:id/:token", userCon.verifyUser);
router.post("/addaddress", protect, userCon.addaddress);
router.post("/isnumberunique", userCon.isNumberUnique);
router.post("/sendemailotp", protect, userCon.sendEmailOtp);
router.post("/verifyemailotp", protect, userCon.verifyEmailOtp);
router.get("/oauth/google", userCon.googleOauthHandler);
router.post("/googlelogin", userCon.loginHandler);
// Login user route
router.post("/glogin", userCon.loginHandler);
// Get my info route

module.exports = router;
