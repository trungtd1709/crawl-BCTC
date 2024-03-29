const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

/**
 * 
 * @param {Sequelize} sequelize 
 * @param {sequelize} Sequelize 
 */
module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("payments", {
        paymentId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            type: Sequelize.INTEGER.UNSIGNED
        },
        type: {
            type: Sequelize.STRING(32)
        },
        courseId: {
            type: Sequelize.INTEGER.UNSIGNED,
        },
        planId: {
            type: Sequelize.INTEGER.UNSIGNED,
        },
        webinarId: {
            type: Sequelize.INTEGER.UNSIGNED,
        },
        price: {
            type: Sequelize.INTEGER
        },
        time: {
            type: Sequelize.DATE
        },
        expirationDate:Sequelize.DATE,
        paymentChannel: {
            type: Sequelize.STRING(32)
        },
        paymentTransactionId: {
            type: Sequelize.STRING(1024)
        },
        status:{
            type: Sequelize.ENUM('SUCCESS','FAILED','PENDING')
        },
        bankAccountId:{
            type: Sequelize.INTEGER.UNSIGNED,
            references:{key:'bankAccountId',model:'bankAccounts'}
        }
    }, {
        timestamps: false
    })
    return Transaction;
}