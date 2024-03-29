const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const BoardOfManagement = sequelize.define("boardOfManagements", {
        boardOfManagementId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        companyId: DataTypes.INTEGER.UNSIGNED,
        title: DataTypes.STRING(256),
        titleEn: DataTypes.STRING(256),
        name: DataTypes.STRING(256),
        positionId: DataTypes.STRING(256),
        yearOfBirth: DataTypes.INTEGER,
        personalShares: DataTypes.INTEGER,
        nationalShares: DataTypes.INTEGER,
        totalShares: DataTypes.INTEGER,
        grade: DataTypes.STRING(256),
        fromDate: DataTypes.STRING(256),
        lastUpdate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return BoardOfManagement;
}