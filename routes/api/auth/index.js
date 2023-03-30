const express = require("express");

const router = express.Router();

const { me } = require("../../../controller");
const { auth } = require("../../../middleware/Auth");

router.get("/me", auth, me);

module.exports = router;
