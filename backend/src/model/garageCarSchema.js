const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const Garage = require("./garageSchema");
const Car = require("./carSchema");

const GarageCar = sequelize.define("GarageCar", {
  garageCarid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  garageId: {
    type: DataTypes.INTEGER,
    references: {
      model: Garage,
      key: "garageID",
    },
    allowNull: false,
  },

  carId: {
    type: DataTypes.INTEGER,
    references: {
      model: Car,
      key: "carId",
    },
    allowNull: false,
  },
});

(async () => {
  try {
    await sequelize.sync(); // Sync models to the database
    console.log("GarageCar table has been created");
  } catch (error) {
    console.log("Error:", error.message);
  }
})();

module.exports = GarageCar;
