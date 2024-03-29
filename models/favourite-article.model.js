const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

/**
 *
 * @param {sequelize.Sequelize} sequelize
 */
// eslint-disable-next-line @typescript-eslint/no-shadow
module.exports = sequelize => {
  const FavouriteArticle = sequelize.define(
    'favouriteArticles',
    {
      favouriteArticleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      accountId: DataTypes.INTEGER,
      articleId: DataTypes.INTEGER,
    },
    {
      indexes: [
        {
          fields: ['accountId', 'articleId'],
          unique: true,
          name: 'articleId_accountId',
        },
      ],
    },
  );

  return FavouriteArticle;
};
