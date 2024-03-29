const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const LaborStructure = sequelize.define("laborStructures", {
        laborStructureId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        companyId: DataTypes.INTEGER.UNSIGNED,
        educationLevel: DataTypes.STRING(256),
        educationLevelEn: DataTypes.STRING(256),
        numOfEmployees: DataTypes.INTEGER.UNSIGNED,
        rate: DataTypes.FLOAT,
        lastUpdate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return LaborStructure;
}