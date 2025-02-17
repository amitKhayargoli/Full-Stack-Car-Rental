const express = require("express");
const router = express.Router();

const carController = require("../controller/carController");

router.post("/", carController.addCar);

router.get("/", carController.getAllCars);

router.put("/updateCarBookingStatus/:id", carController.updateCarBookingStatus);

module.exports = router;
