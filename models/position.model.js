const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Position = sequelize.define("positionsData", {
        positionId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        positionName: DataTypes.STRING(256),
        positionNameEn: DataTypes.STRING(256),
        lastUpdate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return Position;
}