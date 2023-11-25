const Category = require("../models/category");
const Product = require("../models/product");
const BrandStore = require("../models/brandstore");

exports.getbrandform = async (req, res) => {
  res.render("brand/brand_storePage", {
    user: req.user,
  });
};

exports.postbrandfrom = async (req, res) => {
  const { name, type, link } = req.body;
  var image = "";
  if (req.file) {
    image = "/files/" + req.file.filename;
  }
  const b = new BrandStore({
    name: name,
    img: image,
    type: type,
    link: link,
    user: req.user._id,
  });
  await b.save();

  res.redirect("/brandlist");
};

exports.getbrandlist = async (req, res) => {
  const lists = await BrandStore.find();
  res.render("brand/brandList", {
    user: req.user,
    brandList: lists,
  });
};

exports.createCategory = async (req, res) => {
  var img = "";
  if (req.body.isend) {
    img = req.file ? req.file.filename : "";
  }

  const c = new Category({
    name: req.body.name,
    img: img,
    issub: issub,
    isend: isend,
  });

  await c.save();

  return res.status(200).send({
    iserror: false,
    message: "Success",
  });
};

const createProduct = async (req, res) => {
  var img = [];

  req.files.forEach((element) => {
    img.push(element.filename);
  });

  const product = new Product({});
};

const getProductByCategory = async (req, res) => {
  const cat = req.param.cat;
  const products = await Product({ cat });
};

exports.getaddMobileProduct = async (req, res) => {
  const brands = await BrandStore.find({ type: "Brand" });
  const stores = await BrandStore.find({ type: "Store" });
  res.render("mobile/addMobileProduct", {
    user: req.user,
    brands: brands,
    stores: stores,
  });
};

exports.postaddmobileproduct = async (req, res) => {
  console.log(req.body);
};

exports.getAddProduct = async = (req, res) => {
  res.render("product/addProduct", {
    user: req.user,
  });
};
