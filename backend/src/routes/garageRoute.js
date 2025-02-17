const express = require("express");
const router = express.Router();
const {
  addCarToGarage,
  getCarsFromGarage,
  removeCarFromGarage,
} = require("../controller/GarageController");

router.post("/addCarToGarage", addCarToGarage);
router.get("/:userId", getCarsFromGarage);
router.put("/removeCarfromGarage/:id", removeCarFromGarage);

module.exports = router;
