const express = require("express");

const router = express.Router();

const auth = require("./auth");
const users = require("./users");
const products = require("./products");

router.use("/product", products);
router.use("/user", users);
router.use("/auth", products);

module.exports = router;
