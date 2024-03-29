const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define("stocks", {
        stockCode: {
            type: DataTypes.STRING(16),
            primaryKey: true,
        },
        price: {
            type:DataTypes.FLOAT,
            get() {
                const raw = this.getDataValue('price');
                return raw*1000;
            }
        },
        refPrice: {
            type:DataTypes.FLOAT,
            get() {
                const raw = this.getDataValue('refPrice');
                return raw*1000;
            }
        },
        totalVolume:DataTypes.BIGINT,
        totalPrice:DataTypes.BIGINT,
        stockName: DataTypes.STRING(256),
        industryId: DataTypes.INTEGER.UNSIGNED,
        subIndustryId: DataTypes.INTEGER.UNSIGNED,
        mgScore: DataTypes.FLOAT,
        demandScore: DataTypes.STRING(32),

        groupScore: DataTypes.TEXT,
        smrScore: DataTypes.STRING(8),
        exchangeCode: DataTypes.STRING(16),
        active:DataTypes.TINYINT,
        epsStrength: DataTypes.STRING,//Sức mạnh eps
        priceStrength: DataTypes.STRING,//Sức mạnh giá
        feps: DataTypes.FLOAT,
        bvps: DataTypes.FLOAT,
        beta: DataTypes.FLOAT,
        dividend: DataTypes.FLOAT,
        min52w: DataTypes.FLOAT,
        max52w: DataTypes.FLOAT,
        vol52w: DataTypes.BIGINT,
        ros: DataTypes.FLOAT,
        yearRos: DataTypes.FLOAT,
        roe: DataTypes.FLOAT,
        yearRoe: DataTypes.FLOAT,
        roa: DataTypes.FLOAT,
        pe: DataTypes.FLOAT,
        pb: DataTypes.FLOAT,
        yearRoa: DataTypes.FLOAT,
        tlnTts: DataTypes.FLOAT,
        tdttDt: DataTypes.FLOAT,
        tdttLn: DataTypes.FLOAT,
        lastUpdate: DataTypes.DATE,

        summaryStrength: DataTypes.STRING,//Sức mạnh tổng hợp
        companyEffective:DataTypes.STRING,//Hiệu quả doanh nghiệp
        demandStrength: DataTypes.STRING,//Sức mạnh lực cầu

        reportTermDelta: DataTypes.INTEGER //niên độ (số quý lệch khi tính cùng rổ trong index, khi tính độc lập vẫn giữ nguyên. VD: BCTC là Q3/2022 -> tính chỉ số độc lập vẫn là Q3/22, nhưng niên độ = -1 -> tính cùng với index cho Q2/22)
    }, {
        timestamps: false
    })
    return Stock;
}
