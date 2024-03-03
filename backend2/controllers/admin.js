const Product = require("../models/product");
const User = require("../models/user");
const axios = require("axios");

// Controller function to create a new saller type
exports.createSallerType = (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: "Department fetched successfully" });
  } catch (error) {
    next(error);
  }
};

// Controller function to create a new department
exports.createDepartment = async (req, res) => {
  try {
    // Handle department creation logic here
    console.log(req.body);
    console.log(req.file);
    res.status(200).json({ message: "Department fetched successfully" });
  } catch (error) {
    next(error);
  }
};

// Controller function to create a new category
exports.createCategory = async (req, res) => {
  try {
    // Handle category creation logic here
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

// Controller function to create a new subcategory
exports.createSubCategory = async (req, res) => {
  try {
    // Handle subcategory creation logic here
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

// Controller function to create a new item
exports.createItem = async (req, res) => {
  try {
    // Handle item creation logic here
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

// Controller function to fetch all saller types
exports.fetchAllSallerTypes = async (req, res) => {
  try {
    // Handle fetching all saller types logic here
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

// Controller function to fetch all departments
exports.fetchAllDepartments = async (req, res) => {
  try {
    // Handle fetching all departments logic here
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

// Controller function to fetch all categories
exports.fetchAllCategories = async (req, res) => {
  try {
    // Handle fetching all categories logic here
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

// Controller function to fetch all subcategories
exports.fetchAllSubCategories = async (req, res) => {
  try {
    // Handle fetching all subcategories logic here
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

// Controller function to fetch all items
exports.fetchAllItems = async (req, res) => {
  try {
    // Handle fetching all items logic here
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};
