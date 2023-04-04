const express = require("express");

const router = express.Router();

const { allProducts, addProduct } = require("../../../controller");
const { uploadSingleFiles } = require("../../../middleware/upload");
const upload = require("../../../middleware/upload");

router.get("/all", allProducts);
router.post("/add", addProduct);

module.exports = router;
