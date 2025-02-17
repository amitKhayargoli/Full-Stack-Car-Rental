const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const Users = require("./userSchema");

const UserProfile = sequelize.define("UserProfile", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    references: {
      model: Users,
      key: "userId",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  gender: {
    type: DataTypes.ENUM("Male", "Female", "Other"),
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  profilePictureURL: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
});

<<<<<<< HEAD
UserProfile.belongsTo(Users, { foreignKey: "userId", as: "user" });
=======
// UserProfile.belongsTo(Users, { foreignKey: "userId", as: "user" });
>>>>>>> 1ed6d6e1e0d694e406abc5ff9c6d9fd3a2a9cc78

(async () => {
  try {
    await UserProfile.sync();
    console.log("====================", UserProfile.associations);
    console.log(Users.associations);
    console.log(UserProfile.associations);
    console.log("UserProfile table has been created");
  } catch (error) {
    console.log("Error:", error.message);
  }
})();

module.exports = UserProfile;
