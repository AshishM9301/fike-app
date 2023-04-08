const multer = require("multer");
const fs = require("fs");
const join = require("path").join;
const path = require("path");
const formidable = require("formidable");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (
    ["jpg", "svg", "jpeg", "png"].find(
      (val) => val === file.mimetype.split("/")[1]
    )
  ) {
    cb(null, true);
  } else {
    cb(new Error("Not a Image File"), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadSingleFiles = async (req, res, next) => {
  try {
    upload.single(req.fileds)(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res
          .status(500)
          .send({
            error: { message: `Multer uploading error: ${err.message}` },
          })
          .end();
        return;
      } else if (err) {
        // An unknown error occurred when uploading.
        if (err.name == "ExtensionError") {
          res
            .status(413)
            .send({ error: { message: err.message } })
            .end();
        } else {
          res
            .status(500)
            .send({
              error: { message: `unknown uploading error: ${err.message}` },
            })
            .end();
        }
        return;
      }
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error :" + err,
    });
  }
};

const uploadMultiFiles = async (req, res, next) => {
  try {
    upload.array("uploadFile")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res
          .status(500)
          .send({
            error: { message: `Multer uploading error: ${err.message}` },
          })
          .end();
        return;
      } else if (err) {
        // An unknown error occurred when uploading.
        if (err.name == "ExtensionError") {
          res
            .status(413)
            .send({ error: { message: err.message } })
            .end();
        } else {
          res
            .status(500)
            .send({
              error: { message: `unknown uploading error: ${err.message}` },
            })
            .end();
        }
        return;
      }
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error :" + err,
    });
  }
};

const isFileValid = (file) => {
  const type = file?.mimetype;
  // console.log(type);
  const validTypes = ["image/jpg", "image/jpeg", "image/png"];
  if (validTypes.indexOf(type) === -1) {
    return false;
  }
  return true;
};

const uploadFile = (files) => {
  const uploadFolder = path.join("uploads");

  if (!files?.file?.length) {
    //Single file

    const file = files.file;

    // checks if the file is valid
    const isValid = isFileValid(file);

    // console.log(isValid);

    // creates a valid name by removing spaces
    const fileName = encodeURIComponent(
      file?.originalFilename?.replace(/\s/g, "-")
    );

    if (!isValid) {
      // throes error if file isn't valid
      return res.status(400).json({
        status: "Fail",
        message: "The file type is not a valid type",
      });
    }
    try {
      // renames the file in the directory
      return fs.renameSync(file.filepath, join(uploadFolder, fileName));
    } catch (error) {
      console.log(error);
    }
  } else {
    // Multiple files
  }

  // console.log(fields, files);
};

module.exports = { uploadSingleFiles, uploadMultiFiles, uploadFile };
