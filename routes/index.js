const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
