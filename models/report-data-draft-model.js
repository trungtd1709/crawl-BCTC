const { DataTypes, Sequelize } = require('sequelize');

/**
 *
 * @param {Sequelize} sequelize
 * @returns
 */
module.exports = sequelize => {
  const ReportDataDraft = sequelize.define(
    'reportDataDrafts',
    {
      reportDataDraftId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      stockCode: DataTypes.STRING(16),
      businessPermit: DataTypes.STRING(16),
      reportTermId: DataTypes.INTEGER.UNSIGNED,
      auditStatusId: DataTypes.TINYINT,
      yearPeriod: DataTypes.INTEGER,
      reportDate: DataTypes.DATE,
      isAdjusted: DataTypes.TINYINT,
      unitedStatusId: DataTypes.TINYINT,
      reportDate: DataTypes.DATEONLY,
      lastUpdate: DataTypes.DATE,
      reportSent: DataTypes.DATE,
      klcpny: DataTypes.BIGINT,
      klcplh: DataTypes.BIGINT,
      klcplhdc: DataTypes.BIGINT,
      klcplhbq: DataTypes.BIGINT,
      klcplhbqdc: DataTypes.BIGINT,
      marketCap: DataTypes.BIGINT,
    },
    {
      timestamps: false,
      indexes: [
        // {
        //   name: 'stockCode',
        //   fields: [
        //     'stockCode',
        //     'reportTermId',
        //     'yearPeriod',
        //     'auditStatusId',
        //     'unitedStatusId',
        //   ],
        //   unique: true,
        // },
      ],
    },
  );
  return ReportDataDraft;
};
