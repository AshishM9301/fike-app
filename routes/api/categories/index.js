const express = require("express");
const {
  allCategories,
  allCategoriesPost,
  addCategories,
} = require("../../../controller");
const { adminAuth, auth } = require("../../../middleware/Auth");

const router = express.Router();

router.get("/", allCategories);
router.get("/posts", allCategoriesPost);
router.post("/add", auth, adminAuth, addCategories);

module.exports = router;
