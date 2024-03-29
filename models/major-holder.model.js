const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const MajorHolder = sequelize.define("majorHolders", {
        majorHolderId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        companyId: DataTypes.INTEGER.UNSIGNED,
        name: DataTypes.STRING(256),
        nameEn: DataTypes.STRING(256),
        quantity: DataTypes.INTEGER,
        ratio: DataTypes.FLOAT,
        lastUpdate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return MajorHolder;
}