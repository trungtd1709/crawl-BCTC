const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Filter = sequelize.define("filters", {
        filterId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        accountId: DataTypes.INTEGER.UNSIGNED,
        filterName: DataTypes.STRING(256),
        description: DataTypes.STRING(1024)
    })
    return Filter;
}