const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const ReportNorm = sequelize.define(
    "reportNorms",
    {
      reportNormId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      normId: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      parentReportNormId: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      reportComponentId: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      cssStyleId: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      paddingStyleId: {
        type: DataTypes.INTEGER,
      },
      publishNormCode: {
        type: DataTypes.STRING(32),
      },
      ordering: {
        type: DataTypes.INTEGER,
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
  return ReportNorm;
};
