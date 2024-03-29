const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const MyListStock = sequelize.define("myListStocks", {
        myListStockId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        myListId: DataTypes.INTEGER.UNSIGNED,
        stockCode: DataTypes.STRING(16),
        command: DataTypes.STRING(64),
        datetime: DataTypes.DATE,
        price: DataTypes.FLOAT,
        quantity: DataTypes.INTEGER,
        note: DataTypes.TEXT
    },{
        timestamps: false
    })
    return MyListStock;
}