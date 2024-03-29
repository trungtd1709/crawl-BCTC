
const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define("payments", {
        paymentId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        accountId: DataTypes.INTEGER.UNSIGNED,
        type: DataTypes.STRING(32),
        courseId: DataTypes.INTEGER.UNSIGNED,
        planId: DataTypes.INTEGER.UNSIGNED,
        webinarId:DataTypes.INTEGER.UNSIGNED,
        price: DataTypes.INTEGER.UNSIGNED,
        time:DataTypes.DATE,
        expirationDate:DataTypes.DATE,
        paymentChannel:DataTypes.STRING(32),
        paymentTransactionId:DataTypes.STRING(1024),
        status:DataTypes.STRING(12),
        bankAccountId:DataTypes.INTEGER.UNSIGNED
        
    }, {
        timestamps: false
    })
    return Payment;
}