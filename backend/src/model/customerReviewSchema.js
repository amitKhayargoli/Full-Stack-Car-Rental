const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const UserProfile = require("./userProfileSchema"); // Assuming this is the path to your UserProfile schema

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
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
            model: UserProfile,
            key: 'profilePictureURL', 
        },
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
