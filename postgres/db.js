import { Sequelize } from "sequelize";
import { createUSerModel } from "../model/userSchema.js";
import { createProductModel } from "../model/productSchema.js";
import { createCarModel } from "../model/carSchema.js";
import { createUserProfileModel } from "../model/userProfileSchema.js";

const sequelize = new Sequelize("postgres", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

let userModel = null;
let productModel = null;
let carModel = null;
let userProfileModel=null;

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");

    userModel = await createUSerModel(sequelize);
    productModel = await createProductModel(sequelize);
    carModel = await createCarModel(sequelize);
    userProfileModel = await createUserProfileModel(sequelize);

    await sequelize.sync({ alter: true }); 
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { initializeDatabase, userModel,userProfileModel, productModel,carModel, sequelize };
