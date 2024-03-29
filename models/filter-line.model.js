/* eslint-disable @typescript-eslint/no-shadow */
const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

/**
 *
 * @param {sequelize.Sequelize} sequelize
 * @returns
 */
module.exports = (sequelize) => {
  const FilterLine = sequelize.define("filterLines", {
    filterLineId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    filterLineName: DataTypes.STRING,
    filterId: DataTypes.INTEGER.UNSIGNED,
    filterOptions: {
      type: DataTypes.JSON,
      get() {
        let raw = this.getDataValue("filterOptions");

        if (!Array.isArray(raw)) return [];
        return raw;
      },
    },
    compareValue: DataTypes.JSON,
  });
  return FilterLine;
};
