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

// UserProfile.belongsTo(Users, { foreignKey: "userId", as: "user" });

(async () => {
  try {
    await UserProfile.sync();
    console.log("====================", UserProfile.associations);
    console.log(User.associations);
    console.log("UserProfile table has been created");
  } catch (error) {
    console.log("Error:", error.message);
  }
})();

module.exports = UserProfile;
