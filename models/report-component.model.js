const { DataTypes } = require("sequelize");

/**
 *
 * @param {sequelize.Sequelize} sequelize
 */
module.exports = (sequelize, Sequelize) => {
  const ReportComponent = sequelize.define(
    "reportComponents",
    {
      reportComponentId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      reportComponentTypeId: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      reportTemplateId: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      code: {
        type: DataTypes.STRING(16),
      },
      order: {
        type: DataTypes.SMALLINT,
      },
      name: {
        type: DataTypes.STRING(256),
      },
    },
    {
      timestamps: false,
    }
  );
  return ReportComponent;
};
