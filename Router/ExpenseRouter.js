const express = require("express");
const router = express.Router();
const {createData, getData} = require("../Controller/ExpenseController")

router.route("/").post(createData).get(getData);

module.exports =  router;