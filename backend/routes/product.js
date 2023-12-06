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
router.get("/editbrand/:id", isLoggedIn, productCon.geteditStoreBrand);
router.post(
  "/editbrand",
  isLoggedIn,
  upload.single("image"),
  productCon.posteditStoreBrand
);

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
router.get(
  "/addMobileProductList",
  isLoggedIn,
  isAdmin,
  productCon.getaddMobileProductList
);
router.get("/addproduct", isLoggedIn, productCon.getAddProduct);
router.get("/product-details", isLoggedIn, productCon.getProductDetails);
router.get("/addProductList", isLoggedIn, productCon.getaddProductList);
router.post(
  "/addproduct",
  isLoggedIn,
  upload.array("images", 10),
  productCon.postAddProduct
);
router.get("/editproduct/:id", isLoggedIn, productCon.geteditProduct);
router.post(
  "/editproduct",
  isLoggedIn,
  upload.array("images", 10),
  productCon.posteditProduct
);

router.post("/deleteproduct", isLoggedIn, productCon.postDeleteProduct);

router.get("/product/mobile", productCon.getMobileProductList);
router.get("/product/:id", productCon.getProductById);
router.get("/product/features/:category", productCon.getUniqueTitleCatogory);
router.get("/products", productCon.getProducts);

module.exports = router;
