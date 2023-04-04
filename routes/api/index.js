const express = require("express");

const router = express.Router();

const auth = require("./auth");
const users = require("./users");
const products = require("./products");
const categories = require("./categories");

router.use("/product", products);
router.use("/user", users);
router.use("/auth", products);
router.use("/categories", categories);

module.exports = router;
