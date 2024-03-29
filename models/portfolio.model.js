module.exports = (sequelize, Sequelize) => {
    const Portfolio = sequelize.define("portfolios", {
        portfolioId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        accountId: {
            type: Sequelize.INTEGER.UNSIGNED,
        },
        name: {
            type: Sequelize.STRING(128)
        },
    }, {
        timestamps: false
    })
    return Portfolio;
}