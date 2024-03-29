const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Revenue = sequelize.define("revenues", {
        revenueId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        companyId: DataTypes.INTEGER.UNSIGNED,
        revenueType: DataTypes.INTEGER.UNSIGNED,
        name: DataTypes.STRING(256),
        nameEn: DataTypes.STRING(256),
        revenue: DataTypes.DOUBLE,
        currencyUnit: DataTypes.STRING(256),
        year: DataTypes.INTEGER,
        lastUpdate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return Revenue;
}