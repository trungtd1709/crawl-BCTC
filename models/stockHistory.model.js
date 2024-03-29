
const { DataTypes } = require("sequelize");

const {BASE_URL} = require("../config/env");
module.exports = (sequelize, Sequelize) =>{
    const StockHistory = sequelize.define("stockHistory",{
        stockCode:{
            type: DataTypes.STRING(16),
            primaryKey: true,            
        },
        date:DataTypes.DATEONLY,
        exchange:DataTypes.STRING(16),
        totalTradingVolume:DataTypes.BIGINT,
        totalTradingPrice:DataTypes.BIGINT,
        openingPrice:DataTypes.FLOAT,
        closingPrice:DataTypes.FLOAT,
        highestPrice:DataTypes.FLOAT,
        lowestPrice:DataTypes.FLOAT,
        transactions:DataTypes.BIGINT,
        refPrice:DataTypes.FLOAT,
        ceilingPrice:DataTypes.FLOAT,
        floorPrice:DataTypes.FLOAT,
        adjustRate:DataTypes.FLOAT,
        avgPrice:DataTypes.DOUBLE,
    },{
        tableName:'stockHistory',
        timestamps:false
    })
    return StockHistory;
}
