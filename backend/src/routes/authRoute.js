const express = require("express");
const authController = require("../controller/AuthController");

const router = express.Router();

router.get("/init", authController.init);
router.post("/login", authController.login);

module.exports = router;
