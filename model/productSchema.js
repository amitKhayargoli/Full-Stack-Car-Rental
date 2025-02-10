import { DataTypes } from "sequelize";

export const createProductModel=async(sequelize)=>{
    const Product= sequelize.define('Product',{

        productId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unique:true
        },
        productName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        productDesc:{
            type:DataTypes.STRING,
            allowNull:false
        },
        productRate:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        productQuantity:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
    });
    return Product; 
}