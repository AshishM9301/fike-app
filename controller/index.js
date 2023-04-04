const { allProducts, addProduct } = require("./products");
const {
  allCategories,
  addCategories,
  allCategoriesPost,
} = require("./categories");
const { me, login, register } = require("./auth");

module.exports = {
  allProducts,
  addProduct,
  me,
  login,
  register,
  allCategories,
  addCategories,
  allCategoriesPost,
};
