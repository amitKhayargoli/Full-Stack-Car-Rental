const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db"); // Import Sequelize instance

const Car = sequelize.define("Car", {
  carId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Auto-increment ID
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  speed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carImageURL: {
    type: DataTypes.STRING, // Store Image as URL Path
    allowNull: false,
  },
  bookingStatus: {
    type: DataTypes.ENUM("Available", "Booked","Pending"), // Enum values
    defaultValue: "Available",
  },
});

(async () => {
  try {
    await sequelize.sync(); // Sync models to the database
    console.log("Car table has been created");
  } catch (error) {
    console.log("Error:", error.message);
  }
})();

module.exports = Car;
