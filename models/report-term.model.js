const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const ReportTerm = sequelize.define("reportTerms", {
        reportTermId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        termCode: DataTypes.STRING(256),
        fromMonth: DataTypes.INTEGER,
        toMonth: DataTypes.INTEGER,
        description: DataTypes.STRING(256),
        descriptionEn: DataTypes.STRING(256)
    }, {
        timestamps: false
    })
    return ReportTerm;
}