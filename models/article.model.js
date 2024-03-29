/**
 * author: chiennguyen
 * copyright: MDC VietNam
 */

const { BASE_URL } = require('../config/env');

const sequelize = require('sequelize');
const { DataTypes } = sequelize;

/**
 *
 * @param {sequelize} sequelize
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-shadow
module.exports = sequelize => {
  const Article = sequelize.define('article', {
    articleId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(1024),
    },
    trend: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.STRING(128),
    },
    content: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.STRING(16),
    },
    accessLevel: {
      type: DataTypes.INTEGER.UNSIGNED,
      get() {
        const raw = this.getDataValue('accessLevel');
        return parseInt(raw);
      },
    },
    thumbnail: {
      type: DataTypes.STRING(1024),
      // get() {
      //     const raw = this.getDataValue('thumbnail');
      //     if (raw) {
      //         if (raw?.startsWith('http')) return raw;
      //         else return `${BASE_URL}/uploads/${raw}`
      //     }
      //     return raw;
      // }
    },
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    date: {
      type: DataTypes.DATE,
    },

    inAcademy: {
      type: DataTypes.INTEGER,
    },

    active: DataTypes.BOOLEAN,
    url: DataTypes.STRING,
  });
  return Article;
};
