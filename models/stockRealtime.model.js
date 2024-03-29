
const { DataTypes } = require("sequelize");

const {BASE_URL} = require("../config/env");
module.exports = (sequelize, Sequelize) =>{
    const StockRealtime = sequelize.define("stockRealtime",{
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,   
            autoIncrement:true         
        },
        stockCode:DataTypes.STRING(16),
        time:DataTypes.DATE,
        price:DataTypes.FLOAT,
        volume:DataTypes.BIGINT,
        totalVolume:DataTypes.BIGINT,
        updateTime:DataTypes.DATE,
        tickerId:DataTypes.BIGINT,
        exchangeCode:DataTypes.STRING(16)
    },{
        tableName:'stockRealtime',
        timestamps:false
    })
    return StockRealtime;
}
