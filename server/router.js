const express = require("express");
const router = express.Router();
const Controllers = require("./controller");

router.get("/", Controllers.getAll);

module.exports = router;
