const express = require("express");
const router = express.Router();

const userCon = require("../controllers/user");
router.get("/signup", userCon.getSignUp);
router.get("/signin", userCon.getSignin);
router.get("/verifyUser/:id/:token", userCon.verifyUsr);
router.post("/signin", userCon.postSignin);
router.post("/signup", userCon.postSignup);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/signin");
  });
});

router.get("/dashboard", userCon.getDashboard);

module.exports = router;
