const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const StockEvent = sequelize.define("stockEvents", {
        stockEventId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        stockCode: DataTypes.STRING(16),
        titleEvent: DataTypes.STRING(256),
        gdkhqDate: DataTypes.DATE,
        ndkthDate: DataTypes.DATE,
        ndkccDate: DataTypes.DATE,
        eventTypeId: DataTypes.INTEGER,
        note: DataTypes.TEXT,
        parentId: DataTypes.INTEGER,
        channelId: DataTypes.INTEGER,
        reportDate: DataTypes.DATE,
        updateDate: DataTypes.DATE,
        lastUpdate: DataTypes.DATE,
        gdkhqTradingDate: DataTypes.DATE,
        gdkhqClosePrice: DataTypes.DOUBLE,
        gdkhqChange: DataTypes.DOUBLE,
        gdkhqPerChange: DataTypes.DOUBLE,
        gdkhqFloorPrice: DataTypes.DOUBLE,
        gdkhqBasicPrice: DataTypes.DOUBLE,
        gdkhqCeilingPrice: DataTypes.BIGINT
    }, {
        timestamps: false
    })
    return StockEvent;
}
