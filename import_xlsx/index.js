const XLSX = require("xlsx");
const db = require("../models");

const filePath = "./Crawl_MoneyGain.xlsx";

const workbook = XLSX.readFile(filePath);

const reportComponentTypeSheetName = workbook.SheetNames[2];
const reportComponentSheetName = workbook.SheetNames[3];

const reportComponentTypeWorksheet =
  workbook.Sheets[reportComponentTypeSheetName];
const reportComponentWorksheet = workbook.Sheets[reportComponentSheetName];

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
      return newObj;
    });
    return objArray;
  } catch (err) {
    console.log("[ERR CONVERT XLSX --> JSON]:", err);
  }
};

const insertReportTemplate = async () => {
  try {
    //   const reportTemplateSheetName = workbook.SheetNames[1];
    //   const reportTemplateWorksheet = workbook.Sheets[reportTemplateSheetName];
    //   const jsonReportTemplate = XLSX.utils.sheet_to_json(reportTemplateWorksheet);
    const jsonReportTemplate = getJsonData(1);

    await db.ReportTemplate.bulkCreate(jsonReportTemplate, {
      updateOnDuplicate: ["businessTypeId", "templateName", "lastUpdate"],
    });
    console.log("[INSERT REPORT TEMPLATE SUCCESS]");
  } catch (err) {
    console.log("[ERR insert report template]:", err);
  }
};

// const insertReportTemplate = async () => {
//   try {
//     const jsonData = getJsonData(1);
//     console.log(jsonData);
//     const result = await db.ReportTemplate.bulkCreate(jsonData, {
//       updateOnDuplicate: ["businessTypeId", "templateName", "lastUpdate"],
//       validate: true,
//     });
//     // const result = await db.ReportTemplate.create(jsonData[0]);
//     console.log(result);
//     console.log("[INSERT REPORT TEMPLATE SUCCESS]");
//   } catch (err) {
//     console.log("[ERR insert report template]:", err);
//   }
// };

const insertReportComponentType = async () => {
  const jsonData = getJsonData(2);
  try {
    await db.ReportComponentType.bulkCreate(jsonData, {
      updateOnDuplicate: ["code", "name", "nameEn"],
    });
    console.log("[INSERT REPORT COMPONENT TYPE SUCCESS]");
  } catch (err) {
    console.log("[ERR INSERT REPORT COMPONENT TYPE]:", err);
  }
};

const insertReportComponent = async () => {
  const jsonData = getJsonData(3);
  try {
    await db.ReportComponent.bulkCreate(jsonData, {
      updateOnDuplicate: [
        "reportComponentTypeId",
        "reportTemplateId",
        "code",
        "ordering",
      ],
    });
    console.log("[INSERT REPORT COMPONENT SUCCESS]");
  } catch (err) {
    console.log("[ERR INSERT REPORT COMPONENT]:", err);
  }
};

const inserReportXLSX = async () => {
  //   console.log("object");
  await insertReportTemplate();
  //   await insertReportComponentType();
  //   await insertReportComponent();
};

module.exports = {
  inserReportXLSX,
  //   insertReportTemplate,
};
