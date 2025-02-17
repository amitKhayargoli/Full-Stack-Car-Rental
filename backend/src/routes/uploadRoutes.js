const express = require("express");
const upload = require("../middleware/multerConfig.js");
const { uploadFile } = require("../controller/fileControlller.js");

const router = express.Router();

// Route for single file upload
router.post("/upload", upload.single("file"), uploadFile);

module.exports = router;
