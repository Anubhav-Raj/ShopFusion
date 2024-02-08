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
    { name: "uploadPhotos", maxCount: 8 }, // Allow up to 8 images
    { name: "uploadVideo", maxCount: 1 }, // Allow only 1 video
    { name: "uploadFile", maxCount: 1 }, // Allow only 1 file
  ]),
  userCon.createMobile
);
router.post("/addaddress", userCon.addaddress);

module.exports = router;
