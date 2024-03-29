module.exports = (sequelize, Sequelize) => {
    const AccountLessionStatus = sequelize.define('accountLessionStatus', {
        accountLessionStatusId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            type: Sequelize.INTEGER
        },
        lessionId: {
            type: Sequelize.INTEGER
        },
        duration: {
            type: Sequelize.INTEGER
        },
    },
        {
            timestamps: false,
            tableName: 'accountLessionStatus'
        })
    return AccountLessionStatus;
}