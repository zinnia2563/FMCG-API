const express = require("express");
const router = express.Router();
const {createData, getData} = require("../Controller/CashboxController")

router.route("/").post(createData).get(getData);

module.exports =  router;