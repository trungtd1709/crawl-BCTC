const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

/**
 *
 * @param {sequelize.Sequelize} sequelize
 */
// eslint-disable-next-line @typescript-eslint/no-shadow
module.exports = sequelize => {
  const FavouriteFilterLine = sequelize.define(
    'favouriteFilterLines',
    {
      favouriteFilterLineId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      accountId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      indexes: [
        {
          fields: ['accountId', 'name'],
          unique: true,
          name: 'name_accountId',
        },
      ],
    },
  );

  return FavouriteFilterLine;
};
