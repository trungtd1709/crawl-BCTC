const sequelize = require('sequelize');

/**
 *
 * @param {sequelize.Sequelize} Sequelize
 */
module.exports = Sequelize => {
  const AccountResource = Sequelize.define(
    'accountResources',
    {
      accountResourceId: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize.INTEGER.UNSIGNED,
      },
      accountId: {
        type: sequelize.INTEGER.UNSIGNED,
        references: { model: 'accounts', key: 'accountId' },
      },
      type: sequelize.ENUM('BOOK', 'PLAN', 'COURSE', 'WEBINAR'),
      planId: {
        type: sequelize.INTEGER.UNSIGNED,
        references: { model: 'plans', key: 'planId' },
      },
      webinarId: {
        type: sequelize.INTEGER.UNSIGNED,
        references: { model: 'webinars', key: 'webinarId' },
      },
      courseId: {
        type: sequelize.INTEGER.UNSIGNED,
        references: { model: 'courses', key: 'courseId' },
      },
      bookId: {
        type: sequelize.INTEGER.UNSIGNED,
        references: { model: 'books', key: 'bookId' },
      },
      expiredAt: sequelize.DATE,
      active: sequelize.BOOLEAN,
    },
    {
      indexes: [
        { name: 'bookId', fields: ['bookId', 'accountId'], unique: true },
        { name: 'planId', fields: ['planId', 'accountId'], unique: true },
        { name: 'courseId', fields: ['courseId', 'accountId'], unique: true },
        { name: 'webinarId', fields: ['webinarId', 'accountId'], unique: true },
      ],
    },
  );

  return AccountResource;
};
