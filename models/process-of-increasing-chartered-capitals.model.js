const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const ProcessOfIncreasingCharteredCapital = sequelize.define("processOfIncreasingCharteredCapitals", {
        processOfIncreasingCharteredCapitalId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        companyId: DataTypes.INTEGER.UNSIGNED,
        dateChange: DataTypes.STRING(256),
        charteredCapital: DataTypes.BIGINT,
        currencyUnit: DataTypes.STRING(256),
        lastUpdate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return ProcessOfIncreasingCharteredCapital;
}