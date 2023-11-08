const Category = require("../models/category");
const Product = require("../models/product");
const createCategory = async (req, res) => {
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

  const product = new Product({
    
  });
};

const getProductByCategory = async (req, res) => {
  const cat = req.param.cat;
  const products = await Product({ cat });
};

export { createCategory };
