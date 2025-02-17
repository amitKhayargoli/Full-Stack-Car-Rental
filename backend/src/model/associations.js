const Car = require("./carSchema");
const GarageCar = require("./garageCarSchema");
const Garage = require("./garageSchema");
const Users = require("./userSchema");

Users.hasOne(Garage, { foreignKey: "userId" });
Garage.belongsTo(Users, { foreignKey: "userId" });

Garage.belongsToMany(Car, { through: GarageCar, foreignKey: "garageId" });
Car.belongsToMany(Garage, { through: GarageCar, foreignKey: "carId" });

module.exports = {
  Users,
  Car,
  Garage,
  GarageCar,
};
