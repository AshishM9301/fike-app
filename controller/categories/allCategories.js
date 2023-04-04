const Categories = require("../../models/Categories");

const allCategories = async (req, res, next) => {
  try {
    const data = await Categories.aggregate([{ $match: {} }]);

    return res.status(400).json({
      success: true,
      message: "All Categories",
      data: data,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Error : " + err,
    });
  }
};

module.exports = allCategories;
