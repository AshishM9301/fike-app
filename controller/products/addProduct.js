const formidable = require("formidable");
const upload = require("../../middleware/upload");
const path = require("path");
const fs = require("fs");
const Categories = require("../../models/Categories");
const join = require("path").join;

const addProduct = async (req, res, next) => {
  try {
    // const { userType } = req.user;

    // if (!(userType === "Seller")) throw err;

    // const {
    //   categoryId,
    //   subCategoryId,
    //   productName,
    //   coverImage,
    //   price,
    //   offerPrice,
    //   views,
    // } = req.body;

    const uploadFolder = path.join("uploads");

    // console.log(req.files);

    // let uploadFile = { singleFile: "coverImage", multiFiles: "images" };

    // await upload.uploadSingleFiles(req, res);
    // await upload.uploadMultiFiles(req, res);

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
        upload.uploadFile(files);
      }

      const {
        categoryId,
        subCategoryId,
        productName,
        coverImage,
        price,
        offerPrice,
        views,
      } = fields;

      let category;

      if (!categoryId || !subCategoryId) {
        let untitled = await Categories.find({ categoryName: "Untitled" });
        if (untitled.length > 0) {
          category = untitled;
        } else {
          category = await Categories.create({
            categoryName: "Untitled",
          });
        }
      }
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
