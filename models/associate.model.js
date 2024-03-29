const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Associate = sequelize.define("associates", {
        associateId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        associateTypeId: DataTypes.INTEGER.UNSIGNED,
        companyId: DataTypes.INTEGER.UNSIGNED,
        nameEn: DataTypes.STRING(256),
        name: DataTypes.STRING(256),
        charteredCapital: DataTypes.INTEGER,
        ratio: DataTypes.FLOAT,
        currencyUnit: DataTypes.STRING(256),
        lastUpdate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return Associate;
}