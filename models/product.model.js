
module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        productId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(512)
        },
        thumbnail: {
            type: Sequelize.STRING(512)
        },
        url: {
            type: Sequelize.STRING(256)
        },
        description: {
            type: Sequelize.TEXT
        },
        onTop: {
            type: Sequelize.INTEGER
        },
    })
    return Product;
}