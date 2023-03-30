const upload = require("../../middleware/upload");

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

    console.log(req.files);

    // let uploadFile = { singleFile: "coverImage", multiFiles: "images" };

    // await upload.uploadSingleFiles(req, res);
    // await upload.uploadMultiFiles(req, res);

    console.log();

    res.status(200).json({
      success: true,
      message: "Uploaded Image",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error :" + err,
    });
  }
};

module.exports = addProduct;
