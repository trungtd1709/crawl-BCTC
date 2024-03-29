
const { DataTypes } = require("sequelize");

const {BASE_URL} = require("../config/env");
module.exports = (sequelize, Sequelize) =>{
    const IndustryHistory = sequelize.define("industryHistory",{
        industryId:{
            primaryKey:true,
            type:DataTypes.INTEGER.UNSIGNED,
        },
        date:{
            primaryKey:true,
            type:DataTypes.DATEONLY,        
        },
        //totalTradingVolume:DataTypes.BIGINT,
        //totalTradingPrice:DataTypes.BIGINT,
        openingPrice:DataTypes.FLOAT,
        closingPrice:DataTypes.FLOAT,
        highestPrice:DataTypes.FLOAT,
        lowestPrice:DataTypes.FLOAT,
        refPrice:DataTypes.FLOAT,
        //transactions:DataTypes.BIGINT,
    },{
        tableName:'industryHistory',
        timestamps:true
    })
    return IndustryHistory;
}
