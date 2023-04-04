const express = require("express");
const Product = require("../../models/Products");

const allProducts = async (req, res, next) => {
  try {
    const data = await Product.aggregate([{ $match: {} }]);

    return res
      .status(200)
      .json({ success: true, message: "All products", data: data });
  } catch (err) {
    return res.status(400).json({ success: false, message: "Error :" + err });
  }
};

module.exports = allProducts;
