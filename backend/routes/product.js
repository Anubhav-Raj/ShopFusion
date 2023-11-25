const isLoggedIn = require("../middleware/isLoggedIn");
const isAdmin = require("../middleware/isAdmin");
const express = require("express");
const productCon = require("../controllers/product");
const upload = require("../utils/upload");
const router = express.Router();

// router.post("/createcategory");

router.get("/brandfrom", isLoggedIn, productCon.getbrandform);
router.post(
  "/brandstore",
  isLoggedIn,
  upload.single("image"),
  productCon.postbrandfrom
);
router.get("/brandlist", isLoggedIn, productCon.getbrandlist);

router.get(
  "/addmobileproduct",
  isLoggedIn,
  isAdmin,

  productCon.getaddMobileProduct
);

router.post(
  "/addmobileproduct",
  isLoggedIn,
  isAdmin,
  upload.array("images", 10),
  productCon.postaddmobileproduct
);

router.get("/addproduct", isLoggedIn, productCon.getAddProduct);

module.exports = router;
