const express = require("express");
const {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require("../controller/userProfileController");

const router = express.Router();

router.post("/", createUserProfile);

router.get("/:userId", getUserProfile);

router.put("/:userId", updateUserProfile);

router.delete("/:userId", deleteUserProfile);

module.exports = router;
