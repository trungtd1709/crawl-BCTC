const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Voucher = sequelize.define("voucher", {
        voucherId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        code: DataTypes.STRING(8),

        name: DataTypes.STRING(256),

        description: DataTypes.STRING(256),

        type: {
            type: DataTypes.ENUM([
                'PERCENT',
                'ABSOLUTE',
                'DAY',
            ]),
            defaultValue: 'PERCENT',
        },

        value: DataTypes.INTEGER,

        minimumCartValue: DataTypes.INTEGER.UNSIGNED,

        refererType: {
            type: DataTypes.ENUM([
                'PERCENT',
                'ABSOLUTE',
                'DAY',
            ]),
            defaultValue: 'PERCENT',
        },

        refererValue: DataTypes.INTEGER,
    
        multiplePromotion: DataTypes.TINYINT,

        perAccountLimit: DataTypes.INTEGER,

        fromDate: DataTypes.DATE,

        toDate: DataTypes.DATE,

        appliedVoucherCount: DataTypes.INTEGER,

        accountList: DataTypes.JSON,

        productList: DataTypes.JSON,

        totalVoucherLimit: DataTypes.INTEGER.UNSIGNED,

        state: {
            type: DataTypes.ENUM([
                'PENDING',
                'RUNNING',
                'FINISHED',
            ]),
            defaultValue: 'PENDING',
        },

        lastUpdate: DataTypes.DATE,
    }, {
        timestamps: false
    })

    return Voucher;
}
