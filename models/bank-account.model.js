


module.exports = (sequelize, Sequelize) => {
    const BankAccount = sequelize.define("bankAccounts", {
        bankAccountId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        bankName: {
            type: Sequelize.STRING(256)
        },
        accountName: {
            type: Sequelize.STRING(256)
        },
        accountNumber: {
            type: Sequelize.STRING(128)
        },
        branch: {
            type: Sequelize.STRING(256)
        },
        description: {
            type: Sequelize.STRING(512)
        },
        logo: {
            type: Sequelize.STRING(1024)
        }
    }, {
        timestamps: false
    })
    return BankAccount;
}