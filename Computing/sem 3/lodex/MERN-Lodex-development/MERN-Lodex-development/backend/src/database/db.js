const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection successful");
  } catch (error) {
    console.error("connection error: ", error);
  }
};

module.exports = { sequelize, connection };
