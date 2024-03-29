const { DataTypes, Sequelize } = require('sequelize');

/**
 *
 * @param {Sequelize} sequelize
 * @returns
 */
module.exports = sequelize => {
  const StockFinancialIndex = sequelize.define(
    'stockFinancialIndexes',
    {
      stockFinancialIndexId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      stockCode: DataTypes.STRING(16),
      name: DataTypes.STRING(256),
      value: DataTypes.STRING(256),
      type: DataTypes.ENUM('D', 'Q', 'Y', 'TTM'),
      yearPeriod: DataTypes.INTEGER.UNSIGNED,
      termCode: DataTypes.ENUM('Q1', 'Q2', 'Q3', 'Q4'),
      date: DataTypes.DATE,
    },
    {
      indexes: [
        {
          name: 'stockCode',
          fields: [
            'stockCode',
            'yearPeriod',
            'termCode',
            'name',
            'type',
            'date',
          ],
          unique: true,
        },
      ],
    },
  );
  return StockFinancialIndex;
};
