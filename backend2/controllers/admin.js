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

    // Save the category to the database
    await cc
      .save()
      .then((savedCategory) => {
        console.log("Category saved successfully:", savedCategory);
      })
      .catch((error) => {
        console.error("Error saving category:", error);
      });

    // Once the category is saved, update the corresponding department document
    await ChooseDepartment.findByIdAndUpdate(
      req.body.choose_department_id,
      { $push: { category: cc._id } },
      { new: true }
    )
      .then((updatedDepartment) => {
        console.log("Department updated successfully:", updatedDepartment);
      })
      .catch((error) => {
        console.error("Error updating department:", error);
      });

    res
      .status(200)
      .json({ message: "Category created successfully", data: cc });
  } catch (error) {
    next(error);
  }
};

// Controller function to create a new subcategory
exports.createSubCategory = async (req, res, next) => {
  try {
    const csc = new ChooseSubCategory({
      name: req.body.subcategoryName,
      desc: req.body.subCategoryDescription,
      image: req.file.path,
      choose_category: req.body.choose_category_id,
    });

    await csc.save();

    // Assuming 'choose_department' should be 'choose_category'
    await ChooseCategory.findByIdAndUpdate(
      req.body.choose_category_id, // Typo: should be req.body.choose_department_id
      { $push: { subcategories: csc._id } },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Subcategory created successfully", data: csc });
  } catch (error) {
    console.error("Error creating subcategory:", error);
    next(error);
  }
};

// Controller function to create a new item
exports.createItem = async (req, res, next) => {
  try {
    // Handle item creation logic here
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
    // next(error);
    res.status(500).json({ message: "Saller types fetched Faild" });
  }
};
exports.fetchAllDepartments = async (req, res) => {
  try {
    const { choose_type_id } = req.body;

    // Fetch all departments matching the choose_type_id and populate the category and subcategory fields
    const departments = await ChooseDepartment.find({
      choose_type: choose_type_id,
    }).populate({
      path: "category",
      populate: { path: "subcategories" },
    });

    res
      .status(200)
      .json({ message: "Departments fetched successfully", departments });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch departments", error });
  }
};

exports.fetchAllDepartmentsforadmin = async (req, res) => {
  try {
    // Fetch all departments matching the choose_type_id and populate the category and subcategory fields
    const departments = await ChooseDepartment.find()
      .populate({
        path: "category",
        populate: { path: "subcategories" },
      })
      .exec(); // Make sure to execute the query

    console.log(departments);

    res
      .status(200)
      .json({ message: "Departments fetched successfully", departments });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch departments", error });
  }
};

// fect all categories for admin

exports.fetchAllCategoriesforadmin = async (req, res) => {
  try {
    // Fetch all categories matching the choose_type_id and populate the category and subcategory fields
    const categories = await ChooseCategory.find()
      .populate({
        path: "subcategories",
      })
      .exec(); // Make sure to execute the query

    res
      .status(200)
      .json({ message: "Categories fetched successfully", categories });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories", error });
  }
};
// Controller function to fetch all categories
exports.fetchAllCategories = async (req, res) => {
  try {
    // Handle fetching all categories logic here
    // console.log(req.body);
    const Categories = await ChooseCategory.find({
      choose_department: req.body.choose_department_id,
    });
    //console.log(Categories);
    res
      .status(200)
      .json({ message: "Categories fetched successfully", Categories });
  } catch (error) {
    res.status(500).json({ message: "Categories fetched Faild" });
  }
};

// Controller function to fetch all subcategories
// exports.fetchAllSubCategories = async (req, res) => {
//   try {
//     const { choose_category_id } = req.body; // Assuming categoryIds is an array of category IDs

//     // Create an empty object to store subcategories for each category
//     const subCategoriesMap = {};

//     // Fetch category names
//     const categories = await ChooseCategory.find({
//       _id: { $in: choose_category_id },
//     });
//     const categoryNames = categories.reduce((acc, category) => {
//       acc[category._id] = category.name;
//       return acc;
//     }, {});

//     // Fetch subcategories for each category
//     await Promise.all(
//       choose_category_id.map(async (categoryId) => {
//         const subCategories = await ChooseSubCategory.find({
//           choose_category: categoryId,
//         });
//         subCategoriesMap[categoryNames[categoryId]] = subCategories.map(
//           (subcategory) => ({
//             name: subcategory.name,
//             image: subcategory.image,
//             id: subcategory._id,
//           })
//         );
//       })
//     );

//     // console.log(subCategoriesMap);
//     res.status(200).json({
//       message: "Subcategories fetched successfully",
//       subCategoriesMap,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch subcategories", error });
//   }
// };

// exports.fetchAllSubCategories = async (req, res) => {
//   try {
//      console.log("req.body", req.body);
//       return
//     const SubCategories = await ChooseSubCategory.find({
//       choose_category: req.body.choose_category_id,
//     });
//     res
//       .status(200)
//       .json({ message: "Subcategories fetched successfully", SubCategories });
//   } catch (error) {
//     res.status(500).json({ message: "Subcategories fetched Faild" });
//   }
// };

exports.fetchAllSubCategories = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { choose_category_id } = req.body;

    const SubCategories = await ChooseSubCategory.find({
      choose_category: { $in: choose_category_id }, // Find subcategories where choose_category matches any of the provided IDs
    });

    res
      .status(200)
      .json({ message: "Subcategories fetched successfully", SubCategories });
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    res.status(500).json({ message: "Subcategories fetched failed" });
  }
};

// fetch all subCategory  for admin

exports.fetchAllSubCategoriesforadmin = async (req, res) => {
  try {
    const SubCategories = await ChooseSubCategory.find()
      .populate("choose_category") // Assuming the field name referencing categories is choose_category
      .exec();

    res
      .status(200)
      .json({ message: "Subcategories fetched successfully", SubCategories });
  } catch (error) {
    res.status(500).json({ message: "Subcategories fetched failed", error });
  }
};

// Controller function to fetch all items
exports.fetchAllItems = async (req, res) => {
  try {
    // Validate if choose_subcategory_id is provided
    if (!req.body.choose_subcategory_id) {
      return res
        .status(400)
        .json({ message: "choose_subcategory_id is required" });
    }

    // Validate if choose_subcategory_id is a valid ObjectId (assuming you're using MongoDB)
    if (!mongoose.Types.ObjectId.isValid(req.body.choose_subcategory_id)) {
      return res.status(400).json({ message: "Invalid choose_subcategory_id" });
    }

    // Fetch items only if choose_subcategory_id is provided and valid
    const Items = await ChooseItem.find({
      choose_subcategory_id: req.body.choose_subcategory_id,
    });

    res.status(200).json({ message: "Items fetched successfully", Items });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Items fetched failed" });
  }
};
