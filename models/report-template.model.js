const { DataTypes } = require("sequelize");

/**
 *
 * @param {sequelize.Sequelize} sequelize
 */
module.exports = (sequelize, Sequelize) => {
  const ReportTemplate = sequelize.define(
    "reportTemplates",
    {
      reportTemplateId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        // autoIncrement: true,
      },
      businessTypeId: {
        type: DataTypes.INTEGER,
      },
      templateName: {
        type: DataTypes.STRING(256),
      },

      lastUpdate: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
  return ReportTemplate;
};
