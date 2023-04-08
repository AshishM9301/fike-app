const express = require("express");

const router = express.Router();

const {
  allProducts,
  addProduct,
  getSingleProduct,
} = require("../../../controller");
const { uploadSingleFiles } = require("../../../middleware/upload");
const upload = require("../../../middleware/upload");
const { auth } = require("../../../middleware/Auth");

router.get("/all", allProducts);
router.post("/add", auth, addProduct);
router.post("/:id", getSingleProduct);

module.exports = router;
