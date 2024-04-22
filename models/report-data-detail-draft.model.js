const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

/**
 *
 * @param {sequelize.Sequelize} sequelize
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-shadow
module.exports = (sequelize, Sequelize) => {
  const ReportDataDetailDraft = sequelize.define(
    "reportDataDetailDrafts",
    {
      reportDataDetailDraftId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      reportDataDraftId: DataTypes.INTEGER.UNSIGNED,
      publishNormCode: {
        type: DataTypes.STRING(32),
      },
      reportComponentId: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      reportNormId: DataTypes.INTEGER.UNSIGNED,
      value: DataTypes.DOUBLE,
      original: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, 
      },
      lastUpdate: DataTypes.DATE,
    },
    {
      //   timestamps: false,
      indexes: [
        {
          name: "reportNormId_reportDataId",
          fields: ["reportDataDraftId", "reportNormId"],
          unique: true,
        },
      ],
    }
  );
  return ReportDataDetailDraft;
};
