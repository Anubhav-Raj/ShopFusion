const Category = require("../models/category");
const Product = require("../models/product");
const BrandStore = require("../models/brandstore");
const fileDelete = require("../utils/files-delete");
const fs = require("fs");
const { type } = require("os");
const { log } = require("console");
exports.getbrandform = async (req, res) => {
  res.render("brand/brand_storePage", {
    user: req.user,
  });
};

exports.postbrandfrom = async (req, res) => {
  try {
    const { name, type, link } = req.body;
    var image = "";

    if (req.file) {
      image = "/files/" + req.file.filename;
    } else {
      console.log("no file");
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
  } catch (err) {
    // Handle Multer file size error
    if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).send("File too large. Max size is 400KB.");
    } else {
      // Handle other errors
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  }
};

exports.getbrandlist = async (req, res) => {
  var allBrands = [];
  const lists = await BrandStore.find().sort({ user: 1 });
  allBrands = lists;
  if (req.user.userType !== "admin") {
    const userBrand = lists.filter((e) => e.user == req.user._id);
    const notUserBrand = lists.filter((e) => e.user != req.user._id);
    allBrands = [...userBrand, ...notUserBrand];
  }
  res.render("brand/brandList", {
    user: req.user,
    brandList: allBrands,
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
  var images = [];
  const {
    stores,
    key,
    value,
    ScreenSize,
    availability,
    launchedwithin,
    Display,
    description,
    featurevalue,
    price,
    link,
    title,
    Design,
    ScreenResolution,
    FrontCamera,
    RearCamera,
    CPU,
    RAM,
    BatterySize,
    AndroidVersion,
    InbuiltMemory,
    AspectRatio,
    RefreshRate,
    CPUManufacturer,
    GPUManufacturer,
    brands,
  } = req.body;

  for (var i = 0; i < req.files.length; i++) {
    images.push("files/" + req.files[i].filename);
  }
  var priceAt = [];

  if (Array.isArray(stores)) {
    for (var i = 0; i < stores.length; i++) {
      priceAt.push({
        stores: stores[i],
        price: price[i],
        link: link[i],
      });
    }
  } else {
    priceAt.push({
      store: stores,
      price: price,
      link: link,
    });
  }

  var features = [];
  if (Array.isArray(title)) {
    var k = 0;
    for (var i = 0; i < title.length; i++) {
      var keyPair = [];
      if (Array.isArray(featurevalue)) {
        for (var j = 0; j < Number(featurevalue[i]); j++) {
          keyPair.push({
            key: key[k],
            value: value[k],
          });
          k++;
        }
      } else {
        for (var j = 0; j < Number(featurevalue); j++) {
          keyPair.push({
            key: key[k],
            value: value[k],
          });
          k++;
        }
      }
      features.push({
        title: title[i],
        keyPair: keyPair,
      });
    }
  } else {
    var keyPair = [];
    if (Number(featurevalue) > 2) {
      for (var j = 0; j < Number(featurevalue); j++) {
        keyPair.push({
          key: key[j],
          value: value[j],
        });
        k++;
      }
    } else {
      keyPair.push({
        key: key,
        value: value,
      });
    }
    features.push({
      title: title,
      keyPair: keyPair,
    });
  }

  const p = new Product({
    name: req.body.name,
    images: images,
    brands: brands,
    priceAt: priceAt,
    features: features,
    availability: availability,
    launchedwithin: launchedwithin,
    description: description,
    ScreenSize: ScreenSize,
    Display: Display,
    Design: Design,
    ScreenResolution: ScreenResolution,
    FrontCamera: FrontCamera,
    RearCamera: RearCamera,
    CPU: CPU,
    RAM: RAM,
    BatterySize: BatterySize,
    AndroidVersion: AndroidVersion,
    InbuiltMemory: InbuiltMemory,
    AspectRatio: AspectRatio,
    RefreshRate: RefreshRate,
    CPUManufacturer: CPUManufacturer,
    GPUManufacturer: GPUManufacturer,
    Category: "mobile",
    user: req.user._id,
  });
  console.log(p);
  await p.save();
  return res.redirect("/addMobileProductList");
};

exports.getaddMobileProductList = async (req, res) => {
  const products = await Product.find({ Category: "mobile" })
    .populate("brands")
    .populate("user");
  res.render("mobile/mobileList", {
    user: req.user,
    products: products,
  });
};

exports.getAddProduct = async (req, res) => {
  const bs = await BrandStore.find({ type: "Brand" });

  res.render("product/addProduct", {
    user: req.user,
    brands: bs,
  });
};
exports.postAddProduct = async (req, res) => {
  const { key, value, featurevalue, title } = req.body;

  var features = [];
  if (Array.isArray(title)) {
    var k = 0;
    for (var i = 0; i < title.length; i++) {
      var keyPair = [];
      if (Array.isArray(featurevalue)) {
        for (var j = 0; j < Number(featurevalue[i]); j++) {
          keyPair.push({
            key: key[k],
            value: value[k],
          });
          k++;
        }
      } else {
        for (var j = 0; j < Number(featurevalue); j++) {
          keyPair.push({
            key: key[k],
            value: value[k],
          });
          k++;
        }
      }
      features.push({
        title: title[i],
        keyPair: keyPair,
      });
    }
  } else {
    var keyPair = [];
    if (Number(featurevalue) > 2) {
      for (var j = 0; j < Number(featurevalue); j++) {
        keyPair.push({
          key: key[j],
          value: value[j],
        });
        k++;
      }
    } else {
      keyPair.push({
        key: key,
        value: value,
      });
    }
    features.push({
      title: title,
      keyPair: keyPair,
    });
  }
  var images = [];
  for (var i = 0; i < req.files.length; i++) {
    images.push("files/" + req.files[i].filename);
  }
  const p = new Product({
    name: req.body.productname,
    brands: req.body.brands,
    description: req.body.description,
    Category: req.body.Category,
    UsedTime: req.body.UsedTime,
    features: features,
    user: req.user._id,
    SellAddress: req.body.address,
    price: req.body.price,

    images: images,
  });
  await p.save();
  return res.redirect("/addProductList");
};

exports.getProductDetails = async (req, res) => {
  res.render("product/productdetailsPage", {
    user: req.user,
  });
};

exports.getaddProductList = async (req, res) => {
  const products = await Product.find({ user: req.user._id })
    .populate("brands")
    .populate("user");
  res.render("product/addProductList", {
    user: req.user,
    products: products,
  });
};

exports.geteditProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (req.user._id != product.user && !req.user.userType == "admin") {
    return res.redirect("/addProductList");
  }
  res.render("product/editProduct", {
    user: req.user,

    product: product,
  });
};
exports.posteditProduct = async (req, res) => {
  const id = req.params.id;
  const { key, value, featurevalue, title } = req.body;

  var features = [];
  if (Array.isArray(title)) {
    var k = 0;
    for (var i = 0; i < title.length; i++) {
      var keyPair = [];
      if (Array.isArray(featurevalue)) {
        for (var j = 0; j < Number(featurevalue[i]); j++) {
          keyPair.push({
            key: key[k],
            value: value[k],
          });
          k++;
        }
      } else {
        for (var j = 0; j < Number(featurevalue); j++) {
          keyPair.push({
            key: key[k],
            value: value[k],
          });
          k++;
        }
      }
      features.push({
        title: title[i],
        keyPair: keyPair,
      });
    }
  } else {
    var keyPair = [];
    if (Number(featurevalue) > 2) {
      for (var j = 0; j < Number(featurevalue); j++) {
        keyPair.push({
          key: key[j],
          value: value[j],
        });
        k++;
      }
    } else {
      keyPair.push({
        key: key,
        value: value,
      });
    }
    features.push({
      title: title,
      keyPair: keyPair,
    });
  }
  var images = [];
  for (var i = 0; i < req.files.length; i++) {
    images.push("files/" + req.files[i].filename);
  }
  await Product.findByIdAndUpdate(id, {
    name: req.body.productname,
    brands: req.body.brands,
    description: req.body.description,
    Category: req.body.Category,
    UsedTime: req.body.UsedTime,
    features: features,
    user: req.user._id,
    SellAddress: req.body.address,
    price: req.body.price,

    images: images,
  });
  return res.redirect("/addProductList");
};
exports.postDeleteProduct = async (req, res) => {
  const id = req.body.id;
  const product = await Product.findById(id);
  if (req.user._id != product.user && !req.user.userType == "admin") {
    return res.redirect("/addProductList");
  }
  product.images.forEach((element) => {
    var image_name = element.split("/")[1];
    const pathImg = "uploads/images/" + image_name;
    if (fs.existsSync(pathImg)) {
      fileDelete.deleteFiles(pathImg);
    }
  });
  await Product.findByIdAndDelete(id);

  return res.redirect("/addProductList");
};

exports.postDeleteStoreBrand = async (req, res) => {
  const id = req.body.id;
  const brand = await BrandStore.findById(id);
  if (brand.user != req.user._id && !req.user.userType == "admin") {
    return res.redirect("/brandlist");
  }
  var image_name = brand.img.split("/")[1];
  const pathImg = "uploads/images/" + image_name;
  if (brand.img && fs.existsSync(pathImg)) {
    fileDelete.deleteFiles(pathImg);
  }
  await BrandStore.findByIdAndDelete(id);
  return res.redirect("/brandlist");
};

exports.geteditStoreBrand = async (req, res) => {
  const id = req.params.id;
  const brand = await BrandStore.findById(id);
  if (
    req.user.userType !== "admin" &&
    req.user._id.toString() !== brand.user.toString()
  ) {
    return res.redirect("/brandlist");
  }
  res.render("brand/editbrand_stroe", {
    user: req.user,
    brand: brand,
  });
};

exports.posteditStoreBrand = async (req, res) => {
  const id = req.body.id;
  const { name, type, link } = req.body;
  const sb = await BrandStore.findById(id);

  var image = sb.img;
  if (req.file) {
    var image_name = image.split("/")[2];
    const pathImg = "uploads/images/" + image_name;
    if (image && fs.existsSync(pathImg)) {
      fileDelete.deleteFiles(pathImg);
    }
    image = "/files/" + req.file.filename;
  }
  await BrandStore.findByIdAndUpdate(id, {
    name: name,
    img: image,
    type: type,
    link: link,
  });

  return res.redirect("/brandlist");
};

//making api

exports.getMobileProductList = async (req, res) => {
  const products = await Product.find().populate("stores");
  res.status(200).send({
    iserror: false,
    message: "Success",
    data: products,
  });
};

exports.getCategoryProductList = async (req, res) => {
  const products = await Product.find({ Category: req.params.id })
    .populate("brands")
    .populate("user");
  res.status(200).send({
    iserror: false,
    message: "Success",
    data: products,
  });
};

//
exports.getBrandProductList = async (req, res) => {
  const products = await Product.find({ brands: req.params.id });
  res.status(200).send({
    iserror: false,
    message: "Success",
    data: products,
  });
};

exports.getProductById = async (req, res) => {
  const products = await Product.findById(req.params.id)
    .populate("brands")
    .populate("user");
  res.status(200).send({
    iserror: false,
    message: "Success",
    data: products,
  });
};

// getting unique title from feature of product

exports.getUniqueTitleCatogory = async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ Category: category });
  var titles = [];
  products.forEach((element) => {
    element.features.forEach((e) => {
      titles.push(e.title);
    });
  });
  var unique = titles.filter((v, i, a) => a.indexOf(v) === i);
  res.status(200).send({
    iserror: false,
    message: "Success",
    titles: unique,
  });
};

// search product with all filter

exports.getProducts = async (req, res) => {
  const { category, brand, title, price, ram, rom, battery, camera } =
    req.params;
  var query = {};
  if (category) {
    query.Category = category;
  }
  if (brand) {
    query.brands = brand;
  }
  if (title) {
    query["features.title"] = title;
  }
  if (price) {
    query.price = { $lte: price };
  }
  if (ram) {
    query.RAM = ram;
  }
  if (rom) {
    query.InbuiltMemory = rom;
  }
  if (battery) {
    query.BatterySize = battery;
  }
  if (camera) {
    query.RearCamera = camera;
  }
  const products = await Product.find(query)
    .populate("brands")
    .populate("user");
  res.status(200).send({
    iserror: false,
    message: "Success",
    data: products,
  });
};

exports.getAllBrands = async (req, res) => {
  const b = await BrandStore.find({ type: "Brand" });
  res.status(200).send({
    iserror: false,
    message: "Success",
    data: b,
  });
};
