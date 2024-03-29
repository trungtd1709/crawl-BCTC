const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

/**
 *
 * @param {sequelize.Sequelize} sequelize
 * @param {*} Sequelize
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-shadow
module.exports = (sequelize, Sequelize) => {
  const Plan = sequelize.define(
    'plans',
    {
      planId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING(128),
      duration: DataTypes.INTEGER.UNSIGNED,
      price: DataTypes.FLOAT,
      features: DataTypes.JSON,
      featureTitle: DataTypes.STRING,
      featureContent: {
        type: DataTypes.JSON,
        get() {
          let raw = this.getDataValue('featureContent');

          if (!Array.isArray(raw)) return [];
          return raw;
        },
      },
      description: DataTypes.TEXT,
      code: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );
  return Plan;
};
