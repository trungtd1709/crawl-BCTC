const sequelize = require('sequelize');

/**
 *
 * @param {sequelize.Sequelize} sequelize
 * @param {sequelize} Sequelize
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-shadow
module.exports = (sequelize, Sequelize) => {
  const WatchlistStock = sequelize.define(
    'watchlistStocks',
    {
      watchlistStockId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      watchlistId: {
        type: Sequelize.INTEGER.UNSIGNED,
      },
      stockCode: {
        type: Sequelize.STRING(16),
      },
    },
    {
      indexes: [
        {
          name: 'watchlist_stock',
          fields: ['watchlistId', 'stockCode'],
          unique: true,
        },
      ],
    },
  );
  return WatchlistStock;
};
