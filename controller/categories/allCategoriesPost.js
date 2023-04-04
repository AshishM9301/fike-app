const Categories = require("../../models/Categories");

const allCategoriesPost = async (req, res, next) => {
  try {
    const data = await Categories.aggregate([
      { $match: {} },
      {
        $lookup: {
          from: "products",
          localField: "products",
          foreignField: "_id",
          as: "products",
        },
      },
    ]);

    return res.status(400).json({
      success: true,
      message: "All Categories Post",
      data: data,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Error : " + err,
    });
  }
};

module.exports = allCategoriesPost;
