const Car = require("./carSchema");
const CustomerReview = require("./customerReviewSchema");
const GarageCar = require("./garageCarSchema");
const Garage = require("./garageSchema");
const UserProfile = require("./userProfileSchema");
const Users = require("./userSchema");

Users.hasOne(Garage, { foreignKey: "userId" });
Garage.belongsTo(Users, { foreignKey: "userId" });

Garage.belongsToMany(Car, { through: GarageCar, foreignKey: "garageId" });
Car.belongsToMany(Garage, { through: GarageCar, foreignKey: "carId" });
CustomerReview.belongsTo(UserProfile, { foreignKey: 'userId', targetKey: 'userId', as: 'profile' });

module.exports = {
  Users,
  Car,
  Garage,
  GarageCar,
};
