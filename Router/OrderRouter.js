const express = require("express");
const router = express.Router();
const {createOrderByImage} = require("../Controller/OrderController")

router.post("/order_by_image",createOrderByImage);

module.exports = router;