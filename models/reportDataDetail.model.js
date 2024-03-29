const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

/**
 *
 * @param {sequelize.Sequelize} sequelize
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-shadow
module.exports = (sequelize, Sequelize) => {
  const ReportDataDetail = sequelize.define(
    'reportDataDetails',
    {
      reportDataDetailId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      reportDataId: DataTypes.INTEGER.UNSIGNED,
      reportNormId: DataTypes.INTEGER.UNSIGNED,
      value: DataTypes.DOUBLE,
      lastUpdate: DataTypes.DATE,
    },
    {
      //   timestamps: false,
      indexes: [
        {
          name: 'reportNormId_reportDataId',
          fields: ['reportNormId', 'reportNormId'],
          unique: true,
        },
      ],
    },
  );
  return ReportDataDetail;
};
