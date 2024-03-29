module.exports = (sequelize, Sequelize) => {
    const Watchlist = sequelize.define("watchlists", {
        watchlistId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(256)
        },
        accountId: {
            type: Sequelize.INTEGER.UNSIGNED
        },
    })
    return Watchlist;
}