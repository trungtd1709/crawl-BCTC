const sequelize = require('sequelize');

/**
 *
 * @param {sequelize.Sequelize} Sequelize
 */
module.exports = Sequelize => {
  const Cache = Sequelize.define(
    'caches',
    {
      cacheId: {
        type: sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      date: sequelize.DATE,
      name: sequelize.STRING,
      value: sequelize.JSON,
      cacheTime: sequelize.DATE,
    },
    { indexes: [{ name: 'name', fields: ['name'], unique: true }] },
  );

  return Cache;
};
