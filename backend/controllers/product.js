const Category = require("../models/category");
const Product = require("../models/product");
const BrandStore = require("../models/brandstore");
const fileDelete = require("../utils/files-delete");

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
  var images = [];
  const {
    stores,
    key,
    pair,
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
            pair: pair[k],
          });
          k++;
        }
      } else {
        for (var j = 0; j < Number(featurevalue); j++) {
          keyPair.push({
            key: key[k],
            pair: pair[k],
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
          pair: pair[j],
        });
        k++;
      }
    } else {
      keyPair.push({
        key: key,
        pair: pair,
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
  });
  await p.save();
  return res.redirect("/addMobileProductList");
};

exports.getaddMobileProductList = async (req, res) => {
  const products = await Product.find();

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
  console.log(req.body);
};

exports.getProductDetails = async (req, res) => {
  res.render("product/productdetailsPage", {
    user: req.user,
  });
};

exports.getaddProductList = async (req, res) => {
  res.render("product/addProductList", {
    user: req.user,
  });
};

exports.postDeleteStoreBrand = async (req, res) => {
  const id = req.body.id;
  await BrandStore.findByIdAndDelete(id);
  return res.redirect("/brandlist");
};

exports.geteditStoreBrand = async (req, res) => {
  const id = req.params.id;
  const brand = await BrandStore.findById(id);
  res.render("brand/editBrandStore", {
    user: req.user,
    brand: brand,
  });
};

exports.posteditStoreBrand = async (req, res) => {
  const id = req.params.id;
  const { name, type, link } = req.body;
  const sb = await BrandStore.findById(id);
  var image = sb.img;
  if (req.file) {
    image = "/files/" + req.file.filename;
    var image_name = profile.split("/")[2];
    const pathImg = "uploads/images/" + image_name;
    if (profile && fs.existsSync(pathImg)) {
      fileDelete.deleteFiles(pathImg);
    }
  }
  await BrandStore.findByIdAndUpdate(id, {
    name: name,
    img: image,
    type: type,
    link: link,
  });

  return res.redirect("/brandlist");
};
