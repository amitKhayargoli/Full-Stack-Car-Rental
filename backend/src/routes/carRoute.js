const express = require("express");
const router = express.Router();

const carController = require("../controller/carController");

router.post("/", carController.addCar);

router.get("/", carController.getAllCars);

router.put("/updateCarBookingStatus/:id", carController.updateCarBookingStatus);

router.delete("/:carId", carController.deleteCar);

router.put("/:carId", carController.updateCar);

module.exports = router;
