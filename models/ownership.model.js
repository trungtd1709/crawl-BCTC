const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Ownership = sequelize.define("ownerships", {
        ownershipId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        closedDate: DataTypes.DATE,
        companyId: DataTypes.INTEGER.UNSIGNED,
        shareHolders: DataTypes.INTEGER,
        name: DataTypes.STRING(256),
        nameEn: DataTypes.STRING(256),
        shareHolderNoteVN: DataTypes.STRING(256),
        shareHolderNote: DataTypes.STRING(256),
        shares: DataTypes.BIGINT,
        rate: DataTypes.FLOAT,
        lastUpdate: DataTypes.DATE
    }, {
        timestamps: false
    })
    return Ownership;
}