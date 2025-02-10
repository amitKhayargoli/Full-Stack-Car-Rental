import { DataTypes } from "sequelize";

export const createUSerModel=async(sequelize)=>{
    const User= sequelize.define('User',{
        empId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unique:true
        },
        name:{  
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            isLowerCase:true,
            unique:true
        },
        password:{
            type:DataTypes.STRING
          }
        

    });
    return User;
}