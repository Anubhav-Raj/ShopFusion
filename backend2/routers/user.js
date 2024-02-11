const express = require("express");
const router = express.Router();
const userCon = require("../controllers/user");
const { protect } = require("../middleware/is_logged_in");
const more_upload = require("../utils/more_upload");

router.post("/signup", userCon.signup);
router.post("/login", userCon.login);
router.post("/forgotpassword", userCon.forgotPassword);
router.post("/resetpassword", userCon.resetPassword);
router.post("/userbyid", protect, userCon.getUserById);

router.get("/verifyUser/:id/:token", userCon.verifyUser);
router.post(
  "/createMobile",
  more_upload.fields([
    { name: "uploadPhotos" },
    { name: "uploadVideo" },
    { name: "uploadFile" },
  ]),
  userCon.createMobile
);
router.post("/addaddress", protect, userCon.addaddress);
router.post("/isnumberunique", userCon.isNumberUnique);
router.post("/sendemailotp", userCon.sendEmailOtp);
router.post("/verifyemailotp", userCon.verifyEmailOtp);
module.exports = router;
