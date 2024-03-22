const Product = require("../models/product");
const User = require("../models/user");
const mongoose = require("mongoose");
const axios = require("axios");
const Brand = require("../models/brand");
const ModelBrand = require("../models/model_brand");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../models/payment");
const { v4: uuidv4 } = require("uuid");
const BrandModal = require("../models/model_brand");

// exports.createMobile = async (req, res) => {
//   try {
//     console.log(req.body);
//     console.log(req.files);
//     // return;
//     const { recaptchaToken } = req.body;
//     let success = true;
//     const SECRET_KEY_v3 = process.env.RECAPTCHA_SECRET_KEY_v3;
//     const recaptchaResponse = await axios.post(
//       `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY_v3}&response=${recaptchaToken}`
//     );

//     if (
//       !recaptchaResponse.data.success ||
//       recaptchaResponse.data.score < 0.5 ||
//       recaptchaResponse.data.action !== "login"
//     ) {
//       success = false;
//     }
//     const brand = req.body.selectBrand.toLowerCase().trim();
//     const model = req.body.selectModel.toLowerCase().trim();
//     // if brand exsist then create model
//     const brandExsist = await Brand.findOne({ name: brand });

//     const modelExsist = await ModelBrand.findOne({ name: model });

//     var file = req.files.uploadFile ? req.files.uploadFile[0].filename : "";
//     var video = req.files.uploadVideo ? req.files.uploadVideo[0].filename : "";

//     const p = new Product({
//       type: req.body.selectedType,
//       department: req.body.selecteddepartment,
//       category: req.body.selectedcategories,
//       subCategory: req.body.selectedsubcategories,
//       item: req.body.selectedsubcategoriesitem,
//       user: req.user._id,
//       sellerType: req.body.sellerType,
//       sellerName: req.body.sellerName,
//       gstNumber: req.body.gstNumber,
//       color: req.body.color,
//       selectBrand: brandExsist._id,
//       selectModel: modelExsist._id,
//       mobileName: req.body.mobileName,
//       condition: req.body.condition,
//       yearOfPurchase: req.body.yearOfPurchase,
//       availableQuantity: req.body.availableQuantity,
//       minimumOrder: req.body.minimumOrder,
//       price: req.body.price,
//       paymentMode: req.body.paymentMode,
//       serviceMode: req.body.serviceMode,
//       enterAddress: req.body.enterAddress,
//       googleDriveLink: req.body.googleDriveLink,
//       mobileDescription: req.body.mobileDescription,
//       images: req.files.uploadPhotos.map((photo) => photo.filename),
//       file: file,
//       video: video,
//     });
//     await p.save();
//     const user = await User.findById(req.user._id)
//       .select("-password")
//       .populate("products")
//       .populate("addresses");
//     user.products.push(p._id);
//     await user.save();
//     res.json({
//       message: "Product Created",
//       success,
//       isError: false,
//       user: user,
//     });

//     return {
//       valid: success,
//     };
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: error.message,
//       message: "Verify Faild",
//       isError: true,
//     });
//   }
// };
exports.createMobile = async (req, res) => {
  try {
    // Validate incoming request
    const requiredFields = [
      "selectBrand",
      "selectModel",
      "mobileName",
      "selectedType",
      "selecteddepartment",
      "selectedcategories",
      "selectedsubcategories",
      "selectedsubcategoriesitem",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          message: `${field} is required.`,
          isError: true,
        });
      }
    }

    // const { recaptchaToken } = req.body;
    // const SECRET_KEY_v3 = process.env.RECAPTCHA_SECRET_KEY_v3;
    // const recaptchaResponse = await axios.post(
    //   `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY_v3}&response=${recaptchaToken}`
    // );

    // if (
    //   !recaptchaResponse.data.success ||
    //   recaptchaResponse.data.score < 0.5 ||
    //   recaptchaResponse.data.action !== "login"
    // ) {
    //   return res.status(400).json({
    //     message: "Recaptcha verification failed.",
    //     isError: true
    //   });
    // }

    const brand = req.body.selectBrand.toLowerCase().trim();
    const model = req.body.selectModel.toLowerCase().trim();
    // Find or create brand
    let brandExsist = await Brand.findOne({ name: brand });
    // Find or create model
    let modelExsist = await ModelBrand.findOne({ name: model });
    // Upload files

    if (!brandExsist || !modelExsist) {
      return res.status(500).json({
        error: "Brand or model does not exist.",
        message: "Failed to create product.",
        isError: true,
      });
    }
    const file = req.files.uploadFile ? req.files.uploadFile[0].filename : "";
    const video = req.files.uploadVideo
      ? req.files.uploadVideo[0].filename
      : "";

    const type = req.body.selectedType;
    const categories = req.body.selectedcategories;
    const subCategory = req.body.selectedsubcategories;
    const department = req.body.selecteddepartment;
    const item = req.body.selectedsubcategoriesitem;
    const createdBy = req.body.user;

    const productData = {
      type: type,
      category: categories,
      subCategory: subCategory,
      item: item,
      department: department,
      user: createdBy,
      sellerType: req.body.sellerType,
      sellerName: req.body.sellerName,
      gstNumber: req.body.gstNumber,
      color: req.body.color,
      selectBrand: brandExsist._id,
      selectModel: modelExsist._id,
      mobileName: req.body.mobileName,
      condition: req.body.condition,
      yearOfPurchase: req.body.yearOfPurchase,
      availableQuantity: req.body.availableQuantity,
      minimumOrder: req.body.minimumOrder,
      price: req.body.price,
      paymentMode: req.body.paymentMode,
      serviceMode: req.body.serviceMode,
      enterAddress: req.body.enterAddress,
      googleDriveLink: req.body.googleDriveLink,
      mobileDescription: req.body.mobileDescription,
      images: req.files.uploadPhotos.map((photo) => photo.filename),
      file: file,
      video: video,
    };

    const newProduct = new Product(productData);
    const createdProduct = await newProduct.save();
    const user = await User.findByIdAndUpdate(
      createdBy,
      { $push: { products: createdProduct._id } },
      { new: true }
    ).select("-password");

    res.json({
      message: "Product Created",
      success: true,
      isError: false,
      user: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
      message: "Failed to create product.",
      isError: true,
    });
  }
};
exports.createProduct = async (req, res) => {
  try {
    // console.log(req.body);
    res.json({ products: "Creted Product", isError: false });
  } catch (error) {}
};
exports.editmobile = async (req, res) => {
  try {
    // Input validation
    const requiredFields = [
      "id",
      "sellerType",
      "sellerName",
      "gstNumber",
      "color",
      "selectBrand",
      "selectModel",
      "mobileName",
      "condition",
      "yearOfPurchase",
      "availableQuantity",
      "minimumOrder",
      "price",
      "paymentMode",
      "serviceMode",
      "enterAddress",
      "googleDriveLink",
      "mobileDescription",
      "uploadPhotos",
      "uploadFile",
      "uploadVideo",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res
          .status(400)
          .json({ message: `${field} is required`, isError: true });
      }
    }

    const product = await Product.findById(req.body.id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", isError: true });
    }
    if (product.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized", isError: true });
    }

    // Process brand and model
    const brand = req.body.selectBrand.toLowerCase().trim();
    const model = req.body.selectModel.toLowerCase().trim();

    // Check if brand exists, if not, create it
    let brandExsist = await Brand.findOne({ name: brand });
    if (!brandExsist) {
      brandExsist = new Brand({ name: brand });
      await brandExsist.save();
    }

    // Check if model exists, if not, create it
    let modelExsist = await ModelBrand.findOne({ name: model });
    if (!modelExsist) {
      modelExsist = new ModelBrand({ name: model, brand: brandExsist._id });
      await modelExsist.save();
    }

    // Update product fields
    product.sellerType = req.body.sellerType;
    product.sellerName = req.body.sellerName;
    product.gstNumber = req.body.gstNumber;
    product.color = req.body.color;
    product.selectBrand = brandExsist._id;
    product.selectModel = modelExsist._id;
    product.mobileName = req.body.mobileName;
    product.condition = req.body.condition;
    product.yearOfPurchase = req.body.yearOfPurchase;
    product.availableQuantity = req.body.availableQuantity;
    product.minimumOrder = req.body.minimumOrder;
    product.price = req.body.price;
    product.paymentMode = req.body.paymentMode;
    product.serviceMode = req.body.serviceMode;
    product.enterAddress = req.body.enterAddress;
    product.googleDriveLink = req.body.googleDriveLink;
    product.mobileDescription = req.body.mobileDescription;

    // Process file uploads
    product.images = req.files.uploadPhotos.map((photo) => photo.filename);
    product.file = req.files.uploadFile[0].filename;
    product.video = req.files.uploadVideo[0].filename;

    // Save product changes
    await product.save();

    res.json({ message: "Product updated", isError: false });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal server error", isError: true });
  }
};
exports.deletemobile = async (req, res) => {
  // console.log("Body", req.body);
  try {
    // Input validation
    if (!req.body.id || typeof req.body.id !== "string") {
      return res
        .status(400)
        .json({ message: "Invalid product ID", isError: true });
    }

    // Authorization check
    const product = await Product.findById(req.body.id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", isError: true });
    }
    if (product.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized", isError: true });
    }

    // Deletion
    await product.deleteOne();
    res.json({ message: "Product removed", isError: false });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error", isError: true });
  }
};
exports.createBrand = async (req, res) => {
  try {
    // Input validation
    const requiredFields = [
      "sellerType",
      "category_id",
      "department_id",
      "brandName",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res
          .status(400)
          .json({ message: `${field} is required`, isError: true });
      }
    }

    const brandName = req.body.brandName.toLowerCase().trim();
    const brandNamesArray = brandName.split(",");

    const categories_id = req.body.category_id;
    const departments_id_array = categories_id.split(",");

    for (let i = 0; i < brandNamesArray.length; i++) {
      const brandExist = await Brand.findOne({ brandName: brandNamesArray[i] });
      if (brandExist) {
        return res.status(400).json({
          message: `${brandNamesArray[i]} already exists`,
          isError: true,
        });
      } else {
        const brand = new Brand({
          brandName: brandNamesArray[i],
          category_ID: departments_id_array,
          image: req.files[i].path,
          key: uuidv4(),
        });
        await brand.save();
      }
    }

    return res
      .status(200)
      .json({ message: `Brand(s) Created`, isError: false });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to create Brand", error: error, isError: true });
  }
};
exports.createBrandmodal = async (req, res) => {
  try {
    const { modalname, brandID } = req.body;
    const newBrandModal = await BrandModal.create({
      name: modalname,
      brand: brandID,
    });

    res.status(200).json({ message: "Created suessfully", isError: false });
  } catch (error) {
    res.status(500).json({ message: "Faild to create", isError: true });
  }
};
exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find().populate("category_ID");
    res.status(200).json({ brands, message: "Brands", isError: false });
  } catch (error) {
    res.status(500).json({ message: error.message, isError: true });
  }
};
exports.getcategoriesBrand = async (req, res) => {
  try {
    const categories_id = req.body.categories_id;
    if (!categories_id) {
      return res
        .status(400)
        .json({ message: "Invalid categories ID", isError: true });
    }
    // console.log(categories_id);
    const brands = await Brand.find({
      category_ID: { $in: categories_id },
    });
    // console.log(brands);

    res.status(200).json({ brands, message: "Categories", isError: false });
  } catch (error) {
    res.status(500).json({ message: error.message, isError: true });
  }
};
//get model based on brand
exports.getModels = async (req, res) => {
  try {
    const models = await ModelBrand.find({ brand: req.body.id });
    res
      .status(200)
      .json({ models, isError: false, message: "Models  etch sucess fully" });
  } catch (error) {
    res.status(500).json({ message: error.message, isError: true });
  }
};
exports.userAllProduct = async (req, res) => {
  try {
    //console.log("userAllProduct");
    const user = res.locals.user;

    // console.log(user);
    const products = await Product.find({ user: user._id })
      .populate("selectBrand")
      .populate("selectModel")
      .populate("enterAddress");
    //console.log(products);

    res.json({ products: products, isError: false });
  } catch (error) {
    res.status(500).json({ message: error.message, isError: true });
  }
};
//razorpay payment
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});
exports.payment = async (req, res) => {
  try {
    // console.log(req.body);
    const { productsID } = req.body;
    const product_first = await Product.findById(productsID[0]).populate(
      "enterAddress"
    );

    const payment_capture = 1;
    const amount = productsID.length * 5; // apply  condition accoding to country
    var currency = "INR"; // apply  condition accoding to country
    if (product_first.enterAddress.selectedCountry !== "India") {
      currency = "USD";
    }
    const options = {
      amount: amount * 100,
      currency,
      receipt: "receipt_order_for_post_payment",
      payment_capture,
    };

    const response = await razorpay.orders.create(options);
    // console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      receipt: "receipt_order_For_post_payment",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.paymentVerification = async (req, res) => {
  try {
    // console.log(req.body);
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    console.log(isAuthentic);
    if (isAuthentic) {
      // Database comes here
      const products = req.body.productID.productsID;
      console.log(products);
      const p = new Payment({
        products: products,
        paymentID: razorpay_payment_id,
        signature: razorpay_signature,
        amount: products.length * 5,
        orderID: razorpay_order_id,
        status: true,
      });
      await p.save();
      // fetch product and update status
      for (let i = 0; i < products.length; i++) {
        const product = await Product.findById(products[i]);
        product.status = true;
        product.payment = p._id;
        await product.save();
      }

      res.redirect(
        `${process.env.FRONTEND_URL}/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      res.redirect(
        `${process.env.FRONTEND_URL}/paymentfail?reference=${razorpay_payment_id}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

//  fetch product information
exports.fetchAllSubCategoriesproduct = async (req, res) => {
  try {
    // console.log(req.body);
    const SubCategories_id = req.body.SubCategories_id;
    const products = await Product.find({ subCategory: SubCategories_id });
    // console.log(products);
    res.json({ products: products, isError: false });
  } catch (error) {}
};
