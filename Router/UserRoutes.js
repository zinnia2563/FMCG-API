const express = require("express");
const router = express.Router();
const {
 createUser,
 authUser
} = require("../Controller/UserController");

//admin for create and get users
router.route("/").post(createUser);

router.route("/login").post(authUser);


module.exports = router