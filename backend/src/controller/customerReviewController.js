const CustomerReview = require('../model/customerReviewSchema'); // Assuming the path to your CustomerReview model



// Create a new customer review
const createReview = async (req, res) => {
    try {
        const { username, email, review, profilePicture } = req.body;
        const newReview = await CustomerReview.create({
            username,
            email,
            review,
            profilePicture,
        });
        res.status(201).json(newReview);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating review', error: error.message });
    }
};

// Get all customer reviews
const getAllReviews = async (req, res) => {
    try {
        const reviews = await CustomerReview.findAll();
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving reviews', error: error.message });
    }
};

// Get a single customer review by user ID
const getReviewById = async (req, res) => {
    try {
        const { userId } = req.params;
        const review = await CustomerReview.findOne({ where: { userId } });

        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(200).json(review);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving review', error: error.message });
    }
};

// Update a customer review by user ID
const updateReview = async (req, res) => {
    try {
        const { userId } = req.params;
        const { review, profilePicture } = req.body;

        const updatedReview = await CustomerReview.update(
            { review, profilePicture },
            { where: { userId }, returning: true }
        );

        if (updatedReview[0] === 0) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(200).json(updatedReview[1][0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating review', error: error.message });
    }
};

// Delete a customer review by user ID
const deleteReview = async (req, res) => {
    try {
        const { userId } = req.params;
        const deleted = await CustomerReview.destroy({ where: { userId } });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(204).send(); // No content to return, just success
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting review', error: error.message });
    }
};

module.exports = {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview,
};
