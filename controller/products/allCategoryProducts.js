const Categories = require("../../models/Categories");

const allCategoryProducts = async (req, res, next) => {
  try {
    const data = await Categories.aggregate([
      { $match: {} },
      {
        $lookup: {
          from: "product",
          let: "categoryId",
          pipeline: "_id",
          as: "products",
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "All Category with Products Details",
      data: data,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: "Error :" + err });
  }
};

module.exports = allCategoryProducts;
