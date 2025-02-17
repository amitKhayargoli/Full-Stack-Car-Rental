const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const UserProfile = require("./userProfileSchema"); // Import UserProfile schema

const CustomerReview = sequelize.define("customerReviews", {
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    review: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profilePictureURL: { // Add profilePictureURL field
        type: DataTypes.STRING,
        allowNull: true,
    },
});



(async () => {
    try {
        await CustomerReview.sync();
        console.log("Customer Review table has been created");
    } catch (error) {
        console.log("Error: ", error.message);
    }
})();

module.exports = CustomerReview;
