const Product = require("../models/product");
const User = require("../models/user");
const axios = require("axios");
const ChooseType = require("../models/choose_type");
const ChooseDepartment = require("../models/choose_department");
const ChooseCategory = require("../models/choose_category");
const ChooseSubCategory = require("../models/choose_subcat");
const ChooseItem = require("../models/choose_item");
// Controller function to create a new saller type
exports.createSallerType = async (req, res) => {
  try {
    // console.log(req.body);
    const ct = new ChooseType({
      name: req.body.sallerName,
      desc: req.body.sallerDescription,
    });
    await ct.save();
    res
      .status(200)
      .json({ message: "Department created successfully", data: ct });
  } catch (error) {
    next(error);
  }
};

// Controller function to create a new department
exports.createDepartment = async (req, res, next) => {
  try {
    // Handle department creation logic here

    const cd = new ChooseDepartment({
      name: req.body.departmentName,
      desc: req.body.departmentDescription,
      image: req.file.path,
      choose_type: req.body.choose_type_id,
    });
    await cd.save();
    res.status(200).json({ message: "Department fetched successfully" });
  } catch (error) {
    next(error);
  }
};

// Controller function to create a new category
exports.createCategory = async (req, res, next) => {
  try {
    // Handle category creation logic here

    const cc = new ChooseCategory({
      name: req.body.categoryName,
      desc: req.body.categoryDescription,
      image: req.file.path,
      choose_department: req.body.choose_department_id,
    });
    await cc.save();
    res
      .status(200)
      .json({ message: "Category created successfully", data: cc });
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

// Controller function to create a new subcategory
exports.createSubCategory = async (req, res, next) => {
  try {
    console.log(req.file.path);

    // Handle subcategory creation logic here
    const csc = new ChooseSubCategory({
      name: req.body.subcategoryName,
      desc: req.body.subCategoryDescription,
      image: req.file.path,
      choose_category: req.body.choose_category_id,
    });
    await csc.save();
    console.log(req.body);
    res
      .status(200)
      .json({ message: "Subcategory created successfully", data: csc });
  } catch (error) {
    next(error);
  }
};

// Controller function to create a new item
exports.createItem = async (req, res, next) => {
  try {
    // Handle item creation logic here
    console.log(req.body);
    const ci = new ChooseItem({
      name: req.body.itemName,
      desc: req.body.itemDescription,
      image: req.file.path,
      choose_category_id: req.body.choose_subcategory_id,
    });
    await ci.save();
    res.status(200).json({ message: "Item created successfully", data: ci });
  } catch (error) {
    next(error);
  }
};

// Controller function to fetch all saller types
exports.fetchAllSallerTypes = async (req, res) => {
  try {
    // Handle fetching all saller types logic here
    const SellerTypes = await ChooseType.find();
    res
      .status(200)
      .json({ message: "Saller types fetched successfully", SellerTypes });
  } catch (error) {
    next(error);
  }
};

// Controller function to fetch all departments
exports.fetchAllDepartments = async (req, res) => {
  try {
    // Handle fetching all departments logic here

    const Departments = await ChooseDepartment.find({
      choose_type: req.body.choose_type_id,
    });
    res
      .status(200)
      .json({ message: "Departments fetched successfully", Departments });
  } catch (error) {
    next(error);
  }
};

// Controller function to fetch all categories
exports.fetchAllCategories = async (req, res) => {
  try {
    // Handle fetching all categories logic here
    const Categories = await ChooseCategory.find({
      choose_department: req.body.choose_department_id,
    });
    res
      .status(200)
      .json({ message: "Categories fetched successfully", Categories });
  } catch (error) {
    next(error);
  }
};

// Controller function to fetch all subcategories
exports.fetchAllSubCategories = async (req, res) => {
  try {
    console.log(req.body);
    // Handle fetching all subcategories logic here
    const SubCategories = await ChooseSubCategory.find({
      choose_category: req.body.choose_category_id,
    });
    res
      .status(200)
      .json({ message: "Subcategories fetched successfully", SubCategories });
  } catch (error) {
    next(error);
  }
};

// Controller function to fetch all items
exports.fetchAllItems = async (req, res) => {
  try {
    // Handle fetching all items logic here
    const Items = await ChooseItem.find({
      choose_subcategory_id: req.body.choose_subcategory_id,
    });
    res.status(200).json({ message: "Items fetched successfully", Items });
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};
