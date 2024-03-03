const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/is_logged_in");
const adminCon = require("../controllers/admin");
const more_upload = require("../utils/more_upload");

router.post("/createsallertype", protect, adminCon.createSallerType);
router.post(
  "/createdepartment",
  protect,
  more_upload.single("departmentImage"),
  adminCon.createDepartment
);
router.post(
  "/createcategory",
  protect,
  more_upload.single("categoryImage"),
  adminCon.createCategory
);
router.post(
  "/createsubcategory",
  protect,
  more_upload.single("subCategoryImage"),
  adminCon.createSubCategory
);
router.post(
  "/createitem",
  protect,
  more_upload.single("itemImage"),
  adminCon.createItem
);

router.get("/fetchallsallertypes", protect, adminCon.fetchAllSallerTypes);
router.get("/fetchalldepartments", protect, adminCon.fetchAllDepartments);
router.get("/fetchallcategories", protect, adminCon.fetchAllCategories);
router.get("/fetchallsubcategories", protect, adminCon.fetchAllSubCategories);
router.get("/fetchallitems", protect, adminCon.fetchAllItems);

module.exports = router;
