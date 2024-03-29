
const { DataTypes } = require("sequelize");

const {BASE_URL} = require("../config/env");
module.exports = (sequelize, Sequelize) =>{
    const Company = sequelize.define("companies",{
        companyId:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,            
        },
        name:DataTypes.STRING(256),
        fullname:DataTypes.STRING(512),
        fullnameEn:DataTypes.STRING(512),
        logo:DataTypes.STRING(1024),
        taxCode:DataTypes.STRING(32),
        address:DataTypes.STRING(512),
        phone:DataTypes.STRING(256),
        fax:DataTypes.STRING(64),
        email:DataTypes.STRING(64),
        website:DataTypes.STRING(1024),
        status:DataTypes.TINYINT,
        foundPermit:DataTypes.STRING(64),
        foundDate:DataTypes.DATEONLY,
        businessPermit:DataTypes.STRING(64),
        issueDate:DataTypes.DATEONLY,
        contactPerson:DataTypes.STRING(128),
        contactPersonPosition:DataTypes.STRING(64),
        identifyNumber:DataTypes.STRING(64),
        permanentAddress:DataTypes.STRING(1024),
        infoSupplier:DataTypes.STRING(128),
        infoSupplierPosition:DataTypes.STRING(128),
        introduction:DataTypes.TEXT,
        capital:DataTypes.BIGINT,
        notes:DataTypes.TEXT,
        otherInfo:DataTypes.TEXT,
        industryId:DataTypes.INTEGER.UNSIGNED,
        subIndustryId:DataTypes.INTEGER.UNSIGNED,
        branches:DataTypes.TEXT,
        stockCode:DataTypes.STRING(8),
        lastUpdate:DataTypes.DATE,
        firstTradingSessionPrice: DataTypes.STRING(256),
        postUpDate: DataTypes.DATE,
        listingDate: DataTypes.DATE,
        kldny:DataTypes.INTEGER.UNSIGNED,
        kldlh:DataTypes.INTEGER.UNSIGNED
    })
    return Company;
}
