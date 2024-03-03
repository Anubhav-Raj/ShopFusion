const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/is_logged_in");
const adminCon = require("../controllers/admin");

router.post("/create-saller-type", protect, adminCon.createSallerType);
router.post("/create-department", protect, adminCon.createDepartment);
router.post("/create-category", protect, adminCon.createCategory);
router.post("/create-subcategory", protect, adminCon.createSubCategory);
router.post("/create-item", protect, adminCon.createItem);

router.get("/fetch-all-saller-types", protect, adminCon.fetchAllSallerTypes);
router.get("/fetch-all-departments", protect, adminCon.fetchAllDepartments);
router.get("/fetch-all-categories", protect, adminCon.fetchAllCategories);
router.get("/fetch-all-subcategories", protect, adminCon.fetchAllSubCategories);
router.get("/fetch-all-items", protect, adminCon.fetchAllItems);
