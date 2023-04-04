const Categories = require("../../models/Categories");
const SubCategories = require("../../models/SubCategories");

const addCategories = async (req, res, next) => {
  try {
    const { categoryName, subCatrgoryName } = req.body;
    if (!categoryName) {
      throw err;
    }

    let subCategory = null;

    if (subCatrgoryName) {
      subCategory = await SubCategories.create({
        subCategoryName,
      });
    }

    await Categories.create({
      categoryName,
      subCategoryId: subCategory?._id ? subCategory?._id : null,
    }).then(async (data) => {
      if (subCategory) {
        await SubCategories.updateOne(
          { _id: subCategory._id },
          { $setOnInsert: { categoryId: data._id } }
        );
      }
    });

    return res.status(200).json({
      success: true,
      message: "Save Category",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Error : " + err,
    });
  }
};

module.exports = addCategories;
