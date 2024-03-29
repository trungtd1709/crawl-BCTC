const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const FilterConditional = sequelize.define("filterConditionals", {
        filterConditionalId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING(256),
    }, {
        timestamps: false
    })
    return FilterConditional;
}