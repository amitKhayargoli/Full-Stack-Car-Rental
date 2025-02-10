    import { DataTypes } from "sequelize";

    export const createUserProfileModel = async (sequelize) => {
        const UserProfile = sequelize.define('UserProfile', {
            userId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            address: {  
                type: DataTypes.STRING,
                allowNull: false
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            gender: {
                type: DataTypes.ENUM('Male', 'Female', 'Other'),
                allowNull: false
            },
            dateOfBirth: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            profilePictureURL: {
                type: DataTypes.STRING,
                allowNull: true
            }
        });
        
        return UserProfile;
    };