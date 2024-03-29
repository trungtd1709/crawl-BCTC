
const { DataTypes } = require("sequelize");

const {BASE_URL} = require("../config/env");
module.exports = (sequelize, Sequelize) =>{
    const StockSplit = sequelize.define("stockSplits",{
        splitId:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        stockCode:DataTypes.STRING(16),
        basicPrice:DataTypes.FLOAT,
        ceilingPrice:DataTypes.FLOAT,
        floorPrice:DataTypes.FLOAT,
        closePrice:DataTypes.FLOAT,
        klcplh:DataTypes.BIGINT,
        klcpny:DataTypes.BIGINT,
        lastUpdate:DataTypes.DATE,
        adjustRate:DataTypes.FLOAT,
        marketState:DataTypes.STRING(8), 
        tradingDate:DataTypes.DATE,
    },{
        tableName:'stockSplits',
        timestamps:false
    })
    StockSplit.removeAttribute('id');
    return StockSplit;
}
