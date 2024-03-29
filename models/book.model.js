/**
 * author: chiennguyen
 * copyright: MDC VietNam
 */

const { BASE_URL } = require("../config/env");
module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("books", {
    bookId: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(256),
    },
    description: {
      type: Sequelize.STRING(1024),
    },
    cover: {
      type: Sequelize.STRING(1024),
      // get(){
      //     const raw = this.getDataValue('cover');
      //     if(raw?.startsWith('http')) return raw;
      //     else return `${BASE_URL}/uploads/${raw}`
      // }
    },
    images: {
      type: Sequelize.JSON,
      allowNull: true,
      defaultValue: null,
      get() {
        const rawValue = this.getDataValue("images");
        return rawValue && typeof rawValue === "string"
          ? JSON.parse(rawValue)
          : rawValue;
      },
    },
    author: {
      type: Sequelize.STRING(256),
    },
    price: {
      type: Sequelize.INTEGER.UNSIGNED,
      get() {
        const rawValue = this.getDataValue("price");
        return parseInt(rawValue);
      },
    },
    publisher: {
      type: Sequelize.STRING(256),
    },
    year: {
      type: Sequelize.INTEGER.UNSIGNED,
    },
    link: {
      type: Sequelize.STRING(1024),
      allowNull: true,
    },
    // quybka
    content: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    coverType: {
      type: Sequelize.STRING(256),
      allowNull: true,
    },
    pageNumber: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    translator: {
      type: Sequelize.STRING(256),
      allowNull: true,
    },
    width: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    height: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });
  return Book;
};
