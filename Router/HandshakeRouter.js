const express = require("express");
const router = express.Router();
const {createData} = require("../Controller/handShakeController")

router.route("/").post(createData);

module.exports = router;