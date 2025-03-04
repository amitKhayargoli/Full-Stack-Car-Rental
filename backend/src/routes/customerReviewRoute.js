const express = require("express");
const customerReviewController = require("../controller/customerReviewController");
const { authenticateToken } = require("../middleware/token-middleware");

const router = express.Router();

router.get("/all", customerReviewController.getAllReviews);

router.get("/:id", authenticateToken, customerReviewController.getReviewById);

router.post("/", authenticateToken, customerReviewController.createReview);

router.put("/:id", authenticateToken, customerReviewController.updateReview);

router.delete("/:id", authenticateToken, customerReviewController.deleteReview);

module.exports = router;
