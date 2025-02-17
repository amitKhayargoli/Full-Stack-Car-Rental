const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.deleteUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);

module.exports = router;
