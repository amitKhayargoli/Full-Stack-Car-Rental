const { DataTypes } = require("sequelize");

const { sequelize } = require("../database/db");

const Car = require("./carSchema");

const User = require("./userSchema");

const carRental = sequelize.define("CarRental", {
  rentalId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },

  carId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Car,
      key: "carId",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "userId",
    },
  },

  rentalDays: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  rentalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  rentalDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

(async () => {
  try {
    await carRental.sync();
    console.log("CarRental table has been created");
  } catch (error) {
    console.log("Error:", error.message);
  }
})();

module.exports = carRental;
