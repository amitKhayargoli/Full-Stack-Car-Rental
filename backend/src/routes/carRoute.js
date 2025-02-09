const express = require("express");
const router = express.Router();

const carController = require("../controller/carController");

router.post("/", carController.addCar);

router.get("/", carController.getAllCars);

module.exports = router;
