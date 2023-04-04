const express = require("express");

const router = express.Router();

router.get("/");
router.get("/posts");
router.post("/add");

module.exports = router;
