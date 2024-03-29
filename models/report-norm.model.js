const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const ReportNorm = sequelize.define("reportNorms", {
        reportNormId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        normId: DataTypes.INTEGER.UNSIGNED,
        name: DataTypes.STRING(256),
        nameEn: DataTypes.STRING(256),
        lastUpdate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return ReportNorm;
}