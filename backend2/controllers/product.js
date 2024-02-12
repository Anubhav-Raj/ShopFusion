const Product = require("../models/product");
const axios = require("axios");
const Brand = require("../models/brand");
const ModelBrand = require("../models/model_brand");
const User = require("../models/user");

exports.createMobile = async (req, res) => {
  try {
    const { recaptchaToken } = req.body;
    let success = true;
    const SECRET_KEY_v3 = "6LfplmApAAAAAIoOHdbF-BquBwgjBFakSq5bxPFg";
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY_v3}&response=${recaptchaToken}`
    );

    if (
      !recaptchaResponse.data.success ||
      recaptchaResponse.data.score < 0.5 ||
      recaptchaResponse.data.action !== "login"
    ) {
      success = false;
    }
    const brand = req.body.selectBrand.toLowerCase();
    const model = req.body.selectModel.toLowerCase();
    // if brand exsist then create model
    var brandExsist = await Brand.findOne({ name: brand });
    if (!brandExsist) {
      brandExsist = new Brand({ name: brand });
      await brandExsist.save();
    }
    var modelExsist = await ModelBrand.findOne({ name: model });
    if (!modelExsist) {
      modelExsist = new ModelBrand({ name: model, brand: brandExsist._id });
      await modelExsist.save();
    }
    // return console.log( req.files.uploadPhotos, req.files.uploadVideo, req.files.uploadFile );

    const p = new Product({
      user: req.user._id,
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
      file: req.files.uploadFile[0].filename,
      video: req.files.uploadVideo[0].filename,
    });
    await p.save();
    const user = await User.findById(req.user._id)
      .select("-password")
      .populate("products")
      .populate("addresses");
    user.products.push(p._id);
    await user.save();
    res.json({
      message: "Product Created",
      success,
      isError: false,
      user: user,
    });

    return {
      valid: success,
    };
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
      message: "Verify Faild",
      isError: true,
    });
  }
};

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message, isError: true });
  }
};
//get model based on brand
exports.getModels = async (req, res) => {
  try {
    const models = await ModelBrand.find({ brand: req.body.brandId });
    res.json(models);
  } catch (error) {
    res.status(500).json({ message: error.message, isError: true });
  }
};
