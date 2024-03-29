const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const OrderItem = sequelize.define("orderItems", {
        itemId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        orderId: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: "orders",
                key: "orderId",
            },
        },

        type: DataTypes.ENUM("BOOK", "PLAN", "COURSE", "WEBINAR"),

        amount: DataTypes.INTEGER.UNSIGNED,

        actualPrice: DataTypes.INTEGER,

        sellingProduct: DataTypes.JSON,

        voucher: DataTypes.JSON
    })

    return OrderItem;
}
