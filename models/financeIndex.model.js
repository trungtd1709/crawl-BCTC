const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
/**
 *
 * @param {Sequelize} sequelize
 * @param {sequelize} Sequelize
 */
module.exports = function (sequelize, Sequelize) {
  const FinanceIndex = sequelize.define(
    "financeIndexes",
    {
      financeIndexId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      financeIndexGroupId: {
        type: Sequelize.INTEGER.UNSIGNED,
      },
      financeIndexCode: {
        type: Sequelize.STRING,
      },
      financeIndexCodeEn: {
        type: Sequelize.STRING,
      },
      financeIndexName: {
        type: Sequelize.STRING,
      },
      financeIndexNameEn: {
        type: Sequelize.STRING,
      },
      unit: {
        type: Sequelize.STRING,
      },
      unitEn: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return FinanceIndex;
};
