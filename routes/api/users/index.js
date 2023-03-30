const express = require("express");

const router = express.Router();

const User = require("../../../models/Users");
const register = require("./register");
const login = require("./login");

router.use("/register", register);
router.use("/login", login);

module.exports = router;
