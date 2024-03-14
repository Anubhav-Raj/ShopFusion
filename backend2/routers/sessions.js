const express = require("express");
const router = express.Router();
const userCon = require("../controllers/user");

router.get("/oauth/google", userCon.googleOauthHandler);

module.exports = router;
