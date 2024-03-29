const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Warrant = sequelize.define("warrants", {
        warrantId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        stockId: DataTypes.INTEGER.UNSIGNED,
        stockCode: DataTypes.STRING(16),
        baseStockId: DataTypes.INTEGER.UNSIGNED,
        warrantCode: DataTypes.STRING(256),
        issueCompanyId: DataTypes.INTEGER.UNSIGNED,
        releaseDate: DataTypes.DATE,
        postUpDate: DataTypes.DATE,
        firstTradingDate: DataTypes.DATE,
        lastTradingDate: DataTypes.DATE,
        dueDate: DataTypes.DATE,
        conversionRate: DataTypes.FLOAT,
        excercisePrice: DataTypes.BIGINT,
        klcplh: DataTypes.BIGINT,
        klcpny: DataTypes.BIGINT,
        stockName: DataTypes.STRING(256),
        stockNameEn: DataTypes.STRING(256),
        url: DataTypes.STRING(256),
        offeringPrice: DataTypes.FLOAT,
        closedDistributionDate: DataTypes.DATE,
        offeringVolume: DataTypes.BIGINT,
        distributedVolume: DataTypes.BIGINT,
        undistributedVolume: DataTypes.BIGINT,
        createdAt: DataTypes.DATE,
        updatedDate: DataTypes.STRING(256),
    }, {
        timestamps: false
    })
    return Warrant;
}
