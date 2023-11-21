const express = require("express");
const router = express.Router();

const userCon = require("../controllers/user");
router.get("/signup", userCon.getSignUp);
router.get("/signin", userCon.getSignin);
router.get("/verifyUser/:id/:token", userCon.verifyUsr);
router.post("/signin", userCon.postSignin);
router.post("/signup", userCon.postSignup);

module.exports = router;
