const sequelize = require('sequelize');

/**
 *
 * @param {sequelize.Sequelize} Sequelize
 */
module.exports = Sequelize => {
  const SellingProduct = Sequelize.define(
    'sellingProducts',
    {
      sellingProductId: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize.INTEGER.UNSIGNED,
      },
      productId: sequelize.STRING,
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
      price: sequelize.INTEGER.UNSIGNED,
      usageDuration: {
        type: sequelize.INTEGER.UNSIGNED,
        get() {
          let raw = this.getDataValue('usageDuration');

          if (!raw) return null;
          return raw;
        },
      },
      onDisplay: sequelize.BOOLEAN,
    },
    {
      indexes: [{ name: 'type', fields: ['productId', 'type'], unique: true }],
    },
  );

  return SellingProduct;
};
