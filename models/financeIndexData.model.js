const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
/**
 *
 * @param {Sequelize} sequelize
 * @param {sequelize} Sequelize
 */
module.exports = function (sequelize, Sequelize) {
  const FinanceIndexData = sequelize.define(
    "financeIndexDatas",
    {
      financeIndexDataId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      financeIndexId: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: { model: "financeIndexes", },
      },
      reportTermId: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: { model: "reportTerms" },
      },
      companyId: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: { model: "companies" },
      },
      termCode: {
        type: Sequelize.STRING,
      },
      yearPeriod: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      indexValue: { type: Sequelize.FLOAT },
    },
    { timestamps: false }
  );

  return FinanceIndexData;
};
