const { getCompanyByBusinessPermit } = require("../database/companyUtils.js");
const { Builder, By, Key, until } = require("selenium-webdriver");
const {
  delay,
  getButtonChangeTabId,
  getTableId,
  now,
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
  reportYearElId,
  reportQuarterElId,
} = require("../shared/constant.js");
const db = require("../models/index.js");
const {
  getReportTemplateId,
  getReportComponentTypeId,
  getReportComponentId,
  getNormId,
} = require("../database/reportUtils.js");
const _ = require("lodash");

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
  const driver = await new Builder().forBrowser("chrome").build();
  const urlToCrawl = process.env.WEB_URL_TO_CRAWL;
  let currentPagination = 1;

  try {
    await driver.get(urlToCrawl);
    await waitPageLoad(driver);
    let rowIndex = 0;
    // await changeDateRange(driver, "10/10/2023", "05/11/2023");
    while (rowIndex < 15) {
      // <tr> là các thẻ chứa link báo cáo
      if (currentPagination > 1) {
        await changePagination(driver, currentPagination);
      }

      const trElements = await driver.findElements(By.xpath("//*[@_afrrk]"));
      // tìm thẻ <td> thứ 2 trong mảng, thẻ này chứa link báo cáo
      const tdElements = await trElements[rowIndex].findElements(By.css("td"));
      // for await (const [index, tdElement] of tdElements.entries()) {

      //   if (index === 1) {
      // Find and click the anchor element
      await navigateToReportDetail(tdElements[1]);
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
      if (rowIndex === 14) {
        rowIndex = 0;
        currentPagination++;
        await changePagination(driver, currentPagination);
        await delay(5);
        continue;
      }
      rowIndex++;
    }
  } catch (error) {
    console.error(now() + "[Error]:" + error.message);
  } finally {
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
    } = await getBusinessInfo(driver);

    await getReportTermData
    let code;
    let reportComponentId;
    let tableOrder = 1;
    let crawlData = [];
    let tableData = [];

    while (tableOrder < 5) {
      if (tableOrder > 1) {
        await changeTab(driver, tableOrder);
      }
      switch (tableOrder) {
        // bảng CDKT
        case 1:
          code = reportComponentTypeCode.CD;
          break;
        // bảng KQKD
        case 2:
          code = reportComponentTypeCode.KQ;
          break;
        // bảng LCTT-TT
        case 3:
          code = reportComponentTypeCode.LCTT;
          break;
        // bảng LCTT-TT
        case 4:
          code = reportComponentTypeCode.LCGT;
          break;
        default:
          code = "";
      }
      reportComponentId = await getReportComponentId({
        // reportComponentTypeId,
        code,
        reportTemplateId,
      });
      tableData = await getTableData({ driver, tableOrder, reportComponentId });
      crawlData.push(tableData);
      tableData = [];
      tableOrder++;
    }
    console.log(
      now() +
        "[CRAWL SUCCESS]:" +
        "\n" +
        businessPermit +
        "\n" +
        stockCode +
        "\n" +
        companyName +
        "\n" +
        reportName
    );
    // console.log(now() + "[crawledData]:", crawlData);
    return;
  } catch (err) {
    console.log(now() + " - [ERROR]: " + err);
    return;
  }
};

// lấy dữ liệu mảng các row của 1 table
const getTableData = async ({ driver, tableOrder, reportComponentId }) => {
  const tableId = getTableId(tableOrder);
  const tableEl = await driver.findElement(By.id(tableId));
  const rowsDataEl = await tableEl.findElements(By.css("tr"));
  const tableData = await getDetailTableData({ rowsDataEl, reportComponentId });
  return tableData;
};

/**
 * @param {{ driver: import('selenium-webdriver').WebDriver }} params - The parameters object.
 */
const getReportTermData = async ({ driver }) => {
  // const tableId = reportGeneralInfoTableId;
  // const tableEl = await driver.findElement(By.id(tableId));
  // const rowsDataEl = await tableEl.findElements(By.className("tr"));
  const reportYearEl = await driver.findElement(By.id(reportYearElId));
  const reportYear = reportYearEl.getText();

  const reportQuarterEl = await driver.findElement(By.id(reportQuarterElId));
  const reportQuarter = reportQuarterEl.getText();
  console.log("[reportYear]:", reportYear);
  console.log("[reportQuarter]:", reportQuarter);
  return { reportYear, reportQuarter };
};

const getBusinessInfo = async (driver) => {
  const companyNameTableEl = await driver.findElement(
    By.id(companyNameTableId)
  );
  const companyNameEls = await companyNameTableEl.findElements(By.css("td"));
  const companyName = await companyNameEls[1].getText();

  const reportNameTableEl = await driver.findElement(By.id(reportNameTableId));
  const reportNameEls = await reportNameTableEl.findElements(By.css("td"));
  const reportName = await reportNameEls[1].getText();

  const headerEls = await driver.findElements(By.css(".xth.xtk"));
  const businessPermitContainerEl = headerEls[0];
  const businessPermit = await businessPermitContainerEl.getText();

  const company = await getCompanyByBusinessPermit({ businessPermit });
  const { stockCode, businessTypeId = 0 } = company;
  const reportTemplateId = await getReportTemplateId({ businessTypeId });

  console.log(
    now() +
      ": [Start crawling !!!]" +
      `Mã doanh nghiệp (businessPermit): ${businessPermit}` +
      "\n" +
      `Stock code: ${stockCode}` +
      "\n" +
      `reportTemplateId: ${reportTemplateId}` +
      "\n" +
      `Tên công ty: ${companyName}` +
      "\n" +
      `Tiêu đề: ${reportName}`
  );

  return {
    companyName,
    reportName,
    businessPermit,
    stockCode,
    reportTemplateId,
  };
};

async function waitForElementVisibleById(driver, elId) {
  let element = await driver.wait(until.elementLocated(By.id(elId)), 10000);
  await driver.wait(until.elementIsVisible(element), 10000);
  return;
}

// lấy thông tin chi tiết của table
const getDetailTableData = async ({ rowsDataEl, reportComponentId }) => {
  let tableData = [];
  outerLoop: for await (const [rowIndex, rowDataEl] of rowsDataEl.entries()) {
    if (rowIndex === 0) continue;
    const dataEls = await rowDataEl.findElements(By.css("td"));
    let keyname, publishNormCode, value, numberStartOfTerm, normId;
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
          normId = await getNormId({ publishNormCode, reportComponentId });
          break;

        // Cột có số cuối kỳ
        case 3:
          const numberEndOfTermEl = await dataEl.findElement(By.css("span"));
          value = await numberEndOfTermEl.getText();
          break;

        // Cột có số đầu kỳ (ko cần quan tâm)
        case 4:
          const numberStartOfTermEl = await dataEl.findElement(By.css("span"));
          numberStartOfTerm = await numberStartOfTermEl.getText();
          break;

        default:
      }
    }
    const objectData = {
      keyname,
      publishNormCode,
      value,
      numberStartOfTerm,
      normId,
    };
    // console.log("[objectData]:", objectData);
    if (publishNormCode) {
      tableData.push(objectData);
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

module.exports = { crawlData };
