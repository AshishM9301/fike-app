const Categories = require("../../models/Categories");

const allCategories = async (req, res, next) => {
  try {
    const data = Categories.aggregate([{ $match: {} }]);

    return res.status(200).json({
      success: true,
      message: "All Categories",
      data: data,
    });
  } catch (err) {}
};

module.exports = allCategories;
