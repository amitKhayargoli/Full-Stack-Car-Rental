const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const Car = require("./carSchema");
const Users = require("./userSchema");

const Garage = sequelize.define("Garage", {
  garageId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: "userId",
    },
    allowNull: false,
  },
});

(async () => {
  try {
    await sequelize.sync();
    console.log("Garage table has been created");
  } catch (error) {
    console.log("Error:", error.message);
  }
})();

module.exports = Garage;
