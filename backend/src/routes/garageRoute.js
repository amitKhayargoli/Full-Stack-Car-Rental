const express = require("express");
const router = express.Router();
const {
  addCarToGarage,
  getCarsFromGarage,
} = require("../controller/GarageController");

router.post("/addCarToGarage", addCarToGarage);
router.get("/:userId", getCarsFromGarage);

module.exports = router;
