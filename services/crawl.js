const { getCompanyByBusinessPermit } = require("../database/companyUtils.js");
const { Builder, By, Key, until } = require("selenium-webdriver");
const {
  delay,
  getButtonChangeTabId,
  getTableId,
  now,
  writeToFile,
  stringToInt,
} = require("../shared/utils/index.js");
const {
  companyNameTableId,
  endDateInputId,
  paginationInputId,
  reportNameTableId,
  startDateInputId,
  reportComponentTypeCode,
  reportGeneralInfoTableId,
  buttonSearchId,
  yearPeriodId,
  reportQuarterElId,
  reportTermIdConst,
  reportTermTypeConst,
  auditStatusConst,
  reportNameTableClassname,
  startPagination,
  paginationTableId,
  tableOrderConst,
} = require("../shared/constant.js");
const db = require("../models/index.js");
const {
  getReportTemplateId,
  getReportComponentTypeId,
  getReportComponentId,
  getReportNormId,
} = require("../database/reportUtils.js");
const _ = require("lodash");
const {
  getReportTermType,
  getReportTermId,
  getAuditStatusId,
  getUnitedStatusId,
  getTableCode,
} = require("./crawl.util.js");
const { insertReportToDB } = require("../database/insert.js");
const chrome = require("selenium-webdriver/chrome");

const waitPageLoad = async (driver) => {
  try {
    await driver.wait(async function () {
      const readyState = await driver.executeScript(
        "return document.readyState"
      );
      return readyState === "complete";
    }, 10000);
  } catch (error) {
    console.error(now() + `[Web cannot load]: ${error}.`);
    console.error(error);
  }
};

const crawlData = async () => {
  let options = new chrome.Options();
  options.addArguments("--headless");
  options.addArguments("--disable-gpu");
  options.addArguments("--no-sandbox");
  options.addArguments("--disable-dev-shm-usage");

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
  const urlToCrawl = process.env.WEB_URL_TO_CRAWL;
  let currentPagination = startPagination;

  try {
    await driver.get(urlToCrawl);
    await waitPageLoad(driver);
    await delay(2);
    const lastPagination = await findLastPagination({ driver });
    // const lastPagination = 2;
    let rowIndex = 0;
    let loopIndex = 1;
    const companyPerPage = 15;
    // await changeDateRange(driver, "10/10/2023", "05/11/2023");
    while (rowIndex < companyPerPage && currentPagination <= lastPagination) {
      // <tr> là các thẻ chứa link báo cáo
      if (currentPagination > 1 && rowIndex != 0) {
        await changePagination(driver, currentPagination);
        await waitPageLoad(driver);
      }
      await delay(3);

      const trElements = await driver.findElements(By.xpath("//*[@_afrrk]"));
      // tìm thẻ <td> thứ 2 trong mảng, thẻ này chứa link báo cáo
      const reportLinkElement = await trElements[rowIndex].findElements(
        By.css("td")
      );
      // for await (const [index, tdElement] of tdElements.entries()) {

      //   if (index === 1) {
      // Find and click the anchor element
      await navigateToReportDetail(reportLinkElement[1]);
      await waitPageLoad(driver);
      await delay(3);
      await startCrawlDetail(driver);

      // Navigate back and wait for the page to load
      await driver.get(urlToCrawl);
      await waitPageLoad(driver);
      await delay(1);
      // break;
      //   }
      // }
      if (rowIndex === companyPerPage - 1) {
        rowIndex = 0;
        currentPagination++;
        await changePagination(driver, currentPagination);
        await waitPageLoad(driver);
        await delay(3);
        continue;
      }
      rowIndex++;
      loopIndex++;
      console.log("[STT]:", loopIndex);
    }
  } catch (error) {
    console.error(now() + "- [Error]:" + error.message);
  } finally {
    console.log(now(), " [FINISH CRAWLING, CLOSING BROWSER ...]");
    await driver.quit();
  }
};

const navigateToReportDetail = async (anchorContainerEl) => {
  const anchorElement = await anchorContainerEl.findElement(By.css("a"));
  const anchorElementText = await anchorElement.getText();
  await anchorElement.click();
};

// Khi đã vào trang chi tiết gọi hàm này bắt đầu lấy dữ liệu
const startCrawlDetail = async (driver) => {
  try {
    const {
      businessPermit,
      companyName,
      reportName,
      stockCode,
      reportTemplateId,
      auditStatusId,
      reportDate,
      isAdjusted,
      reportTermId,
      unitedStatusId,
      yearPeriod,
    } = await getReportTitleInfo({ driver });

    let allTableData =
      (await getAllTableData({ driver, reportTemplateId, reportTermId })) ?? [];

    // một trang báo cáo trên CBTT phải chia làm 2 report data với termId khác nhau
    let reportData = {
      businessPermit,
      stockCode,
      companyName,
      reportName,
      yearPeriod,
      reportTemplateId,
      auditStatusId,
      reportDate,
      isAdjusted,
      // reportTermId,
      unitedStatusId,
      // reportDataDetails,
    };

    let secondReportData = reportData;

    reportData.reportTermId = reportTermId;

    let BCDKTData = allTableData[tableOrderConst.BCDKT - 1];
    let KQKDData = allTableData[tableOrderConst.KQKD - 1];
    let LCTTData = allTableData[tableOrderConst.LCTT - 1];
    let LCGTData = allTableData[tableOrderConst.LCGT - 1];

    if (
      reportTermId == reportTermIdConst.quy1 ||
      reportTermId == reportTermIdConst.banNien ||
      reportTermId == reportTermIdConst.nam
    ) {
      reportData.reportDataDetails = [
        ...BCDKTData,
        ...KQKDData,
        ...LCTTData,
        ...LCGTData,
      ];
    }

    if (
      reportTermId == reportTermIdConst.quy2 ||
      reportTermId == reportTermIdConst.quy3 ||
      reportTermId == reportTermIdConst.quy4
    ) {
      const BCDKTData0 = BCDKTData.forEach((obj) => (obj.value = 0));
      const KQKDData0 = KQKDData.forEach((obj) => (obj.value = 0));
      const LCTTData0 = LCTTData.forEach((obj) => (obj.value = 0));
      const LCGTData0 = LCGTData.forEach((obj) => (obj.value = 0));

      reportData.reportDataDetails = [
        ...BCDKTData,
        ...KQKDData,
        ...LCTTData0,
        ...LCGTData0,
      ];

      secondReportData.reportDataDetails = [
        ...BCDKTData0,
        ...KQKDData0,
        ...LCTTData,
        ...LCGTData,
      ];

      switch (reportTermId) {
        case reportTermIdConst.quy2:
          secondReportData.reportTermId = reportTermIdConst.banNien;
          break;
        case reportTermIdConst.quy3:
          secondReportData.reportTermId = reportTermIdConst["9thang"];
          break;
        case reportTermIdConst.quy4:
          secondReportData.reportTermId = reportTermIdConst.nam;
          break;
        default:
      }
      await insertReportToDB({ reportData: secondReportData });
    }

    await insertReportToDB({ reportData });

    // await writeToFile({
    //   content: JSON.stringify(reportData),
    //   filename: "result.txt",
    // });

    console.log(
      now() +
        "[CRAWL SUCCESS]:" +
        "\n" +
        "[businessPermit]:" +
        businessPermit +
        "\n" +
        "[stockCode]:" +
        stockCode +
        "\n" +
        "[companyName]:" +
        companyName +
        "\n" +
        "[reportName]:" +
        reportName
    );
    // console.log(now() + "[crawledData]:", crawlData);
    return;
  } catch (err) {
    console.log(now() + " - [ERROR]: " + err);
    return;
  }
};

const getAllTableData = async ({ driver, reportTemplateId, reportTermId }) => {
  let tableOrder = 1;
  let reportComponentId;
  let singleTableData = [];
  let allTableData = [];
  while (tableOrder < 5) {
    if (tableOrder > 1) {
      await changeTab(driver, tableOrder);
    }
    code = getTableCode({ tableOrder });
    reportComponentId = await getReportComponentId({
      // reportComponentTypeId,
      code,
      reportTemplateId,
    });
    singleTableData = await getSingleTableData({
      driver,
      tableOrder,
      reportComponentId,
      reportTermId,
    });
    // allTableData = [...allTableData, ...singleTableData];
    allTableData.push(singleTableData);
    singleTableData = [];
    tableOrder++;
  }

  return allTableData;
};

// lấy dữ liệu mảng các row của 1 table
const getSingleTableData = async ({
  driver,
  tableOrder,
  reportComponentId,
  reportTermId,
}) => {
  const tableId = getTableId(tableOrder);
  const tableEl = await driver.findElement(By.id(tableId));
  const rowsDataEl = await tableEl.findElements(By.css("tr"));
  const tableData = await getDetailTableData({
    rowsDataEl,
    reportComponentId,
    reportTermId,
    tableOrder,
  });
  return tableData;
};

/**
 * @param {{ driver: import('selenium-webdriver').WebDriver }} params
 */
const getReportTitleInfo = async ({ driver }) => {
  const companyNameTableEl = await driver.findElement(
    By.id(companyNameTableId)
  );
  const companyNameEls = await companyNameTableEl.findElements(By.css("td"));
  const companyName = await companyNameEls[1].getText();

  // const reportNameTableEl = await driver.findElement(By.id(reportNameTableId));
  // const reportNameEls = await reportNameTableEl.findElements(By.css("td"));
  // const reportName = (await reportNameEls[1].getText()).toLowerCase();

  const reportNameTableEl = await driver.findElement(
    By.className(reportNameTableClassname)
  );
  const reportNameEls = await reportNameTableEl.findElements(By.css("td"));
  const reportName = (await reportNameEls[0].getText()).toLowerCase();

  const headerEls = await driver.findElements(By.css(".xth.xtk"));
  const businessPermitContainerEl = headerEls[0];
  const businessPermit = await businessPermitContainerEl.getText();

  const company = await getCompanyByBusinessPermit({ businessPermit });
  const { stockCode, businessTypeId = 0 } = company;
  const reportTemplateId = await getReportTemplateId({ businessTypeId });

  // reportTermType dua tren reportName (quý, bán niên, năm)
  const reportTermType = getReportTermType({ reportName });
  const unitedStatusId = getUnitedStatusId({ reportName });

  const { auditStatusId, reportTermId, isAdjusted, reportDate, yearPeriod } =
    await getReportGeneralInfo({
      driver,
      reportTermType,
    });

  console.log(
    now() +
      ": [Start crawling !!!]" +
      `Mã doanh nghiệp (businessPermit): ${businessPermit}` +
      "\n" +
      `Stock code: ${stockCode}` +
      "\n" +
      `reportTemplateId: ${reportTemplateId}` +
      "\n" +
      `yearPeriod: ${yearPeriod}` +
      "\n" +
      `Tên công ty: ${companyName}` +
      "\n" +
      `Tiêu đề: ${reportName}`
  );

  return {
    companyName,
    reportName,
    yearPeriod,
    businessPermit,
    stockCode,
    reportTemplateId,
    auditStatusId,
    reportTermId,
    unitedStatusId,
    isAdjusted,
    reportDate,
  };
};

/**
 * @param {{ driver: import('selenium-webdriver').WebDriver }} params
 */
const getReportGeneralInfo = async ({ driver, reportTermType }) => {
  const tablesInfo = await driver.findElements(By.id(reportGeneralInfoTableId));
  let yearPeriod, trichYeuValue, toChucKiemToanValue, quarterPeriod, reportDate;
  let isAdjusted = false;

  // co TH 2 tables, lay table cuoi
  const dataTable = tablesInfo[tablesInfo.length - 1];
  const rowEls = await dataTable.findElements(By.css("tr"));
  // la duoc cac row chua thong tin cua bang

  for await (const [rowIndex, rowEl] of rowEls.entries()) {
    const dataEls = await rowEl.findElements(By.css("td"));
    let dataName = null,
      dataValue = null;

    for await (const [dataIndex, dataEl] of dataEls.entries()) {
      switch (dataIndex) {
        case 0:
          dataName = await dataEl.getText();
          break;
        case 1:
          const test = await dataEl.getText();
          break;
        case 2:
          dataValue = await dataEl.getText();
          if (!dataValue) {
            const inputs = await dataEl.findElements(By.css("input"));
            if (inputs.length > 0) {
              dataValue = await inputs[0].getAttribute("value");
            }
          }
          break;
        default:
      }
    }

    switch (dataName) {
      case "Tổ chức kiểm toán":
        toChucKiemToanValue = dataValue;
        break;

      case "Trích yếu":
        trichYeuValue = dataValue;
        break;

      case "Năm tài chính":
        yearPeriod = dataValue;
        break;

      case "Quý":
        quarterPeriod = dataValue;
        break;

      case "Lý do đính chính":
        isAdjusted = true;
        break;

      case "Ngày ký ban hành":
        reportDate = dataValue;
        break;
      default:
      // console.log("default");
    }
  }

  const auditStatusId = getAuditStatusId({
    toChucKiemToanValue,
    trichYeuValue,
  });

  const reportTermId = getReportTermId({
    quarterPeriod,
    reportTermType,
  });

  return { auditStatusId, reportTermId, isAdjusted, reportDate, yearPeriod };
};

async function waitForElementVisibleById(driver, elId) {
  let element = await driver.wait(until.elementLocated(By.id(elId)), 10000);
  await driver.wait(until.elementIsVisible(element), 10000);
  return;
}

// lấy thông tin chi tiết của table
const getDetailTableData = async ({
  rowsDataEl,
  reportComponentId,
  tableOrder,
}) => {
  let tableData = [];
  outerLoop: for await (const [rowIndex, rowDataEl] of rowsDataEl.entries()) {
    if (rowIndex === 0) continue;
    const dataEls = await rowDataEl.findElements(By.css("td"));
    let keyname, publishNormCode, value, numberStartOfTerm, reportNormId;
    for await (const [dataIndex, dataEl] of dataEls.entries()) {
      switch (dataIndex) {
        // cột có tên chỉ tiêu
        case 0:
          const keynameEl = await dataEl.findElement(By.css("span > span"));
          keyname = await keynameEl.getText();
          break;

        // Cột mã số chỉ tiêu
        case 1:
          const publishNormCodeEl = await dataEl.findElement(By.css("span"));
          publishNormCode = await publishNormCodeEl.getText();
          if (!publishNormCode) {
            continue outerLoop;
          }
          // console.log("[publishNormCode]:", publishNormCode);
          reportNormId = await getReportNormId({
            publishNormCode,
            reportComponentId,
          });
          break;

        // Cột có số cuối kỳ
        case 3:
          const numberEndOfTermEl = await dataEl.findElement(By.css("span"));
          value = stringToInt(await numberEndOfTermEl.getText());
          break;

        // Cột có số đầu kỳ (ko cần quan tâm)
        case 4:
          const numberStartOfTermEl = await dataEl.findElement(By.css("span"));
          numberStartOfTerm = stringToInt(await numberStartOfTermEl.getText());
          break;

        default:
      }
    }
    const objectData = {
      keyname,
      publishNormCode,
      value,
      // numberStartOfTerm,
      reportNormId,
      lastUpdate: new Date(),
    };
    // console.log("[objectData]:", objectData);
    if (publishNormCode && reportNormId && !_.isNaN(value) && value) {
      tableData.push(objectData);
    } else {
      // do nothing
      // console.log("[invalid objectData]:", objectData);
    }
  }
  // console.log("[tableData]:", tableData);
  return tableData;
};

// đổi tab table
const changeTab = async (driver, tableOrder) => {
  const buttonId = getButtonChangeTabId(tableOrder);
  await waitForElementVisibleById(driver, buttonId);
  const buttonChangeTab = await driver.findElement(By.id(buttonId));
  driver.executeScript("arguments[0].click();", buttonChangeTab);
  console.log(now() + " - [ChangeTab]!!!");
  await delay(5);
  return;
};

const changePagination = async (driver, value) => {
  console.log(now() + ` - [ChangePagination]: to page ${value} !!!`);
  let inputElement = await driver.findElement(By.id(paginationInputId));
  await inputElement.clear();
  await inputElement.sendKeys(value, Key.ENTER);
  await delay(1);
  return;
};

const changeDateRange = async (driver, startDate, endDate) => {
  console.log(
    now() + ` - [ChangeDateRange]: from ${startDate} to ${endDate} !!!`
  );
  const startDateInputEl = await driver.findElement(By.id(startDateInputId));
  await startDateInputEl.clear();
  await startDateInputEl.sendKeys(startDate);

  const endDateInputEl = await driver.findElement(By.id(endDateInputId));
  await endDateInputEl.clear();
  await endDateInputEl.sendKeys(endDate);

  const buttonSearchEl = await driver.findElement(By.id(buttonSearchId));
  driver.executeScript("arguments[0].click();", buttonSearchEl);
  return;
};

/**
 * @param {{ driver: import('selenium-webdriver').WebDriver }} params
 */
const checkExistText = async ({ driver, text }) => {
  let elements = await driver.findElements(
    By.xpath(`//*[contains(text(), '${text}')]`)
  );
  return elements.length > 0;
};

/**
 * @param {{ driver: import('selenium-webdriver').WebDriver }} params
 */
const findLastPagination = async ({ driver }) => {
  let table = await driver.findElement(By.id(paginationTableId));
  const tdTags = await table.findElements(By.css("td"));
  const lastPaginationEl = tdTags[tdTags.length - 1];
  const lastPagination = parseInt(await lastPaginationEl.getText());
  return lastPagination;
};

module.exports = { crawlData };
