const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Alert = sequelize.define("alerts", {
        alertId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        accountId: DataTypes.INTEGER.UNSIGNED,
        stockCode: DataTypes.STRING(16),
        type: DataTypes.TINYINT,
        value: DataTypes.FLOAT,
        compare: DataTypes.TINYINT
    })
    return Alert
}