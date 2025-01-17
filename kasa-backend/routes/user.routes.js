const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user.controller");

router.get("/users/:id", userCtrl.getUser);

router.post("/signup", userCtrl.signupUser);

router.post("/login", userCtrl.loginUser);

module.exports = router;
