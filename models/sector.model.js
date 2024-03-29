const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Sector = sequelize.define("sectors", {
        sectorId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        sectorName: DataTypes.STRING(256),
        sectorNameEn: DataTypes.STRING(256),
        sectorCode: DataTypes.INTEGER.UNSIGNED,
        sectorIndexName: DataTypes.STRING(256),
        displayOrder: DataTypes.INTEGER.UNSIGNED,
        beginDate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return Sector
}