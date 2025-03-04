const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Users = sequelize.define("users", {
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

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  role: {
    type: DataTypes.ENUM("user", "admin"),
    allowNull: false,
    defaultValue: "user",
  },
});

(async () => {
  try {
    await Users.sync();
    console.log("User table has been created");
  } catch (error) {
    console.log("Error: ", error.message);
  }
})();

module.exports = Users;
