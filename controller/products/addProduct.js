const upload = require("../../middleware/upload");
const path = require("path");
const fs = require("fs");
const Categories = require("../../models/Categories");
const SubCategories = require("../../models/SubCategories");
const Product = require("../../models/Products");
const join = require("path").join;
var formidable = require("formidable");

const addProduct = async (req, res, next) => {
  try {
    if (req?.user?.userType !== "Seller") {
      throw (Error.name = "Api Not Allowed");
    }

    const uploadFolder = path.join("uploads");

    const form = new formidable.IncomingForm();

    form.multiples = true;
    form.maxFileSize = 50 * 1024 * 1024; // 5MB
    form.uploadDir = uploadFolder;

    // console.log(form);

    form.parse(req, async (err, fields, files) => {
      if (err) {
        // example to check for a very specific error
        console.log(err);
      }
      // console.log(files.file);

      if (files) {
        let uploadSingleFile = upload.uploadFile(files);

        console.log(uploadSingleFile);
      }

      const {
        categoryId,
        categoryName,
        subCategoryName,
        subCategoryId,
        productName,
        coverImage,
        price,
        offerPrice,
      } = fields;

      let category = await Categories.findOne({ _id: categoryId });
      let subCategory = await SubCategories.findOne({ _id: subCategoryId });

      let newCategory, newSubCategory;

      if (!category) {
        newCategory = await Categories.findOneAndUpdate(
          { categoryName: categoryName },
          {
            categoryName: categoryName,
          },
          { $upsert: true }
        );
      }

      if (!subCategory) {
        newSubCategory = await SubCategories.findOneAndUpdate(
          { subCategoryName: subCategoryName, categoryId: category?._id },
          { subCategoryName: subCategoryName, categoryId: category?._id },
          { $upsert: true }
        );

        await Categories.findOneAndUpdate(
          { _id: category?._id ? category?._id : newCategory?._id },
          {
            subCategoryId: [...newCategory?.subCategoryId, newSubCategory._id],
          }
        );
      }

      const data = await Product.create({
        productName,
        price,
        offerPrice,
        categoryId: category?._id ? category?._id : newCategory?._id,
        subCategoryId: subCategory?._id
          ? subCategory?._id
          : newSubCategory?._id,
      });

      return res.status(200).json({
        success: true,
        message: "Product Added",
        data: data,
      });
    });

    return res.status(200).json({
      success: true,
      message: "Uploaded Image",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Error :" + err,
    });
  }
};

module.exports = addProduct;
