const Car = require("./carSchema");
const GarageCar = require("./garageCarSchema");
const Garage = require("./garageSchema");
const UserProfile = require("./userProfileSchema");
const Users = require("./userSchema");

const carRental = require("./carRentalSchema");

Users.hasOne(Garage, { foreignKey: "userId" });
Garage.belongsTo(Users, { foreignKey: "userId" });

Users.hasOne(UserProfile, { foreignKey: "userId", as: "profile" });
UserProfile.belongsTo(Users, { foreignKey: "userId", as: "user" });

Garage.belongsToMany(Car, { through: GarageCar, foreignKey: "garageId" });
Car.belongsToMany(Garage, { through: GarageCar, foreignKey: "carId" });

Car.hasOne(carRental, { foreignKey: "carId" });
carRental.belongsTo(Car, {
  foreignKey: "carId",
});

Users.hasMany(carRental, { foreignKey: "userId" });
carRental.belongsTo(Users, { foreignKey: "userId" });

module.exports = {
  Users,
  Car,
  Garage,
  GarageCar,
  carRental,
};
