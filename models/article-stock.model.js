const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const ArticleStock = sequelize.define("articleStocks", {
        articleStockId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        articleId: DataTypes.INTEGER.UNSIGNED,
        stockCode: DataTypes.STRING(256),
        lastUpdate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return ArticleStock;
}