const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("sequelize");

const { BASE_URL } = require("../config/env");

/**
 * 
 * @param {Sequelize} sequelize 
 * @param {sequelize} Sequelize 
 * @returns 
 */
module.exports = (sequelize, Sequelize) => {
  const Industry = sequelize.define(
    "industries",
    {
      industryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement:true
      },
      parentId: { type: DataTypes.INTEGER.UNSIGNED, references: { model: 'industry', key: 'industryId' } },
      name: DataTypes.STRING(256),
      nameEn: DataTypes.STRING(256),
      capital: DataTypes.DOUBLE,
      share: DataTypes.FLOAT,
      lastUpdate: DataTypes.DATE,
    },
    {
      timestamps: false,
    }
  );
  return Industry;
};
