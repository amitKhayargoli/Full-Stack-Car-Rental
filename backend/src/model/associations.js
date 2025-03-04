const Car = require("./carSchema");
const GarageCar = require("./garageCarSchema");
const Garage = require("./garageSchema");
const UserProfile = require("./userProfileSchema");
const Users = require("./userSchema");

//Updated Associations file
const carRental = require("./carRentalSchema");

Users.hasOne(Garage, { foreignKey: "userId" });
Garage.belongsTo(Users, { foreignKey: "userId" });

Users.hasOne(UserProfile, { foreignKey: "userId", as: "profile" });
UserProfile.belongsTo(Users, { foreignKey: "userId", as: "user" });

Garage.belongsToMany(Car, { through: GarageCar, foreignKey: "garageId" });
Car.belongsToMany(Garage, { through: GarageCar, foreignKey: "carId" });

Car.hasOne(carRental, { foreignKey: "carId", as: "RentalDetails" });
carRental.belongsTo(Car, { foreignKey: "carId", as: "CarDetails" });

Users.hasMany(carRental, { foreignKey: "userId", as: "UserRentals" });
carRental.belongsTo(Users, { foreignKey: "userId", as: "UserDetails" });

module.exports = {
  Users,
  Car,
  Garage,
  GarageCar,
  carRental,
  UserProfile,
};
