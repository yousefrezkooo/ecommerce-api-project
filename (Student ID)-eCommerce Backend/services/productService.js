const Product = require("../models/Product");

// all the actual DB work for products lives here now, controller just
// calls these and handles the req/res side of things
const getAllProducts = () => Product.find({});

const getProductById = (id) => Product.findById(id);

const createProduct = (data) => Product.create(data);

const updateProduct = (id, data) =>
  Product.findByIdAndUpdate(id, data, {
    new: true, // return the updated doc, not the old one
    runValidators: true, // otherwise updates skip schema validation
  });

const deleteProduct = (id) => Product.findByIdAndDelete(id);

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
