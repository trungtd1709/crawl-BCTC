module.exports = (sequelize, Sequelize) => {
    const WebinarAccount = sequelize.define("webinarAccounts", {
        webinarAccountId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        webinarId: {
            type: Sequelize.INTEGER.UNSIGNED
        },
        accountId: {
            type: Sequelize.INTEGER.UNSIGNED
        },
        question: {
            type: Sequelize.TEXT
        }
    })
    return WebinarAccount;
}