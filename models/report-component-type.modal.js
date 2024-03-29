const { DataTypes } = require("sequelize");

/**
 *
 * @param {sequelize.Sequelize} sequelize
 */
module.exports = (sequelize, Sequelize) => {
  const ReportComponentType = sequelize.define(
    "reportComponentTypes",
    {
      reportComponentTypeId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: DataTypes.STRING(16),
      },
      name: {
        type: DataTypes.STRING(256),
      },
      nameEn: {
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
  return ReportComponentType;
};
