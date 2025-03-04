const express = require("express");
const router = express.Router();

const rentalController = require("../controller/carRentalController");

router.post("/:carId", rentalController.addRental);
router.get("/", rentalController.getAllRentals);
router.get("/userRental", rentalController.getRentalByUserId);
// router.post("/:id", rentalController.updateCarBookingStatus);
module.exports = router;
