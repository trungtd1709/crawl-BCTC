const XLSX = require("xlsx");
const db = require("../models");

const filePath = "./Crawl_MoneyGain.xlsx";

const getJsonData = (sheetIndex) => {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[sheetIndex];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const objArray = jsonData.map((data, index) => {
      let newObj = {};
      Object.keys(data).forEach((key) => {
        const newKey = key.charAt(0).toLowerCase() + key.slice(1);
        newObj[newKey] = data[key];
      });
      newObj.lastUpdate = new Date();
      return newObj;
    });
    return objArray;
  } catch (err) {
    console.log("[ERR CONVERT XLSX --> JSON]:", err);
  }
};

const insertReportTemplate = async () => {
  const t = await db.sequelize.transaction();
  try {
    const jsonReportTemplate = getJsonData(1);
    await db.ReportTemplate.bulkCreate(jsonReportTemplate, {
      updateOnDuplicate: ["businessTypeId", "templateName", "lastUpdate"],
      transaction: t,
    });
    await t.commit();
    console.log("[INSERT REPORT TEMPLATE SUCCESS]");
  } catch (err) {
    await t.rollback();
    console.log("[ERR insert report template]:", err);
  }
};

const insertReportComponentType = async () => {
  const jsonData = getJsonData(2);
  const t = await db.sequelize.transaction();
  try {
    await db.ReportComponentType.bulkCreate(jsonData, {
      updateOnDuplicate: ["code", "name", "nameEn"],
      transaction: t,
    });
    await t.commit();
    console.log("[INSERT REPORT COMPONENT TYPE SUCCESS]");
  } catch (err) {
    await t.rollback();
    console.log("[ERR INSERT REPORT COMPONENT TYPE]:", err);
  }
};

const insertReportComponent = async () => {
  const jsonData = getJsonData(3);
  const t = await db.sequelize.transaction();
  try {
    // const newReportComponent = await db.ReportComponent.create(jsonData[0]);
    await db.ReportComponent.bulkCreate(jsonData, {
      updateOnDuplicate: [
        "reportComponentTypeId",
        "reportTemplateId",
        "code",
        "ordering",
      ],
      transaction: t,
    });

    await t.commit();
    console.log("[INSERT REPORT COMPONENT SUCCESS]");
  } catch (err) {
    await t.rollback();
    console.log("[ERR INSERT REPORT COMPONENT]:", err);
  }
};

const insertReportNorm = async () => {
  const jsonData = getJsonData(4);
  const t = await db.sequelize.transaction();
  try {
    // const newReportComponent = await db.ReportComponent.create(jsonData[0]);
    await db.ReportNorm.bulkCreate(jsonData, {
      updateOnDuplicate: [
        "normId",
        "parentReportNormId",
        "reportComponentId",
        "cssStyleId",
        "paddingStyleId",
        "publishNormCode",
        "ordering",
        "name",
        "nameEn",
      ],
      transaction: t,
    });

    await t.commit();
    console.log("[INSERT REPORT NORM SUCCESS]");
  } catch (err) {
    await t.rollback();
    console.log("[ERR INSERT REPORT COMPONENT]:", err);
  }
};

const insertBusinessTypeIdToCompany = async () => {
  const jsonData = getJsonData(5);
  const t = await db.sequelize.transaction();
  try {
    // const newReportComponent = await db.ReportComponent.create(jsonData[0]);
    // for await (const companyData of jsonData) {
    //   const { businessPermit, stockCode, businessTypeId } = companyData;
    //   // await db.Company.upsert({ businessPermit, businessTypeId }, { where });
    //   await db.Company.upsert(
    //     { businessPermit, businessTypeId },
    //     {
    //       where: { stockCode },
    //     }
    //   );
    // }
    await db.Company.bulkCreate(jsonData, {
      updateOnDuplicate: ["businessPermit", "businessTypeId"],
      transaction: t,
    });

    await t.commit();
    console.log("[INSERT businessTypeId, businessPermit SUCCESS]");
  } catch (err) {
    await t.rollback();
    console.log("[ERR INSERT BUSINESS TYPE ID]:", err);
  }
};

const inserReportXLSX = async () => {
  await insertReportTemplate();
  await insertReportComponentType();
  await insertReportComponent();
  await insertReportNorm();
  await insertBusinessTypeIdToCompany();
};

module.exports = {
  inserReportXLSX,
};
