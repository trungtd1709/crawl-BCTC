const sequelize = require('sequelize');
/**
 *
 * @param {sequelize.Sequelize} Sequelize
 */
module.exports = function (Sequelize) {
  const IdeaList = Sequelize.define(
    'ideaList',
    {
      itemId: {
        type: sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      stockCode: {
        type: sequelize.CHAR(32),
        references: {
          model: 'stocks',
          key: 'stockCode',
        },
        unique: true,
      },
      listName: {
        type: sequelize.ENUM([
          'AUTO',
          'CURRENT',
          'BUYPOINT',
          'ADDED',
          'REMOVED',
          'BUY_QUEUE',
          'SELL_QUEUE',
          'SELL_WATCH',
          'BUY_WATCH',
          'TOP50',
          // quybka
          'TOP20',
          'MG_85_85',
          'MG_333',
          'MG_OUT_OF_PRICE_BASE',
          'MG_NEAR_PIVOT_BUY_POINT',
          'MG_M50_PULLBACK',
          'MG_MARK_MINERVINI',
          'MG_AVOID_LIST',

          // VN30
          'VN30',
          // HNX30
          'HNX30',
          //
        ]),
        defaultValue: 'AUTO',
        unique: true,
      },
    },
    {
      timestamps: false,
      indexes: [{ fields: ['stockCode', 'listName'], unique: true }],
    },
  );
  return IdeaList;
};
