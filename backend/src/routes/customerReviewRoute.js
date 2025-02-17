const express = require('express');
const customerReviewController = require('../controller/customerReviewController');

const router = express.Router();

router.get('/all', customerReviewController.getAllReviews);

router.get('/:id', customerReviewController.getReviewById);

router.post('/', customerReviewController.createReview);

router.put('/:id', customerReviewController.updateReview);

router.delete('/:id', customerReviewController.deleteReview);

module.exports = router;