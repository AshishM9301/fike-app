const Product = require("../../models/Products");

const getSingleProduct = async (req, res, next) => {
  try {
    const data = await Product.aggregate([
      { $match: { _id: req?.params?.id } },
    ]);

    return res
      .status(200)
      .json({
        success: true,
        message: "Products Details",
        data: { ...data[0] },
      });
  } catch (err) {
    return res.status(400).json({ success: false, message: "Error :" + err });
  }
};

module.exports = getSingleProduct;
