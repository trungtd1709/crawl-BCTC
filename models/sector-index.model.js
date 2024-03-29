
const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const SectorIndex = sequelize.define("sectorIndexes", {
        sectorIndexId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        sectorId: DataTypes.INTEGER.UNSIGNED,
        openIndex: DataTypes.FLOAT,
        highIndex: DataTypes.FLOAT,
        lowIndex: DataTypes.FLOAT,
        closeIndex: DataTypes.FLOAT,
        priceChange: DataTypes.FLOAT,
        perChange: DataTypes.FLOAT,
        vol: DataTypes.BIGINT,
        val: DataTypes.BIGINT,
        foreignBuyVol: DataTypes.BIGINT,
        foreignSellVol: DataTypes.BIGINT,
        tradingDate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return SectorIndex;
}