import { DataTypes } from "sequelize";

export const createCarModel = async (sequelize) => {
  const CarModel = sequelize.define("Car", {
    model: {
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
  yearOfManufacture: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  });
  return CarModel;
};



