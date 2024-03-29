const { Builder, By, Key, until } = require("selenium-webdriver");
const {
  delay,
  getButtonChangeTabId,
  getTableId,
  now
} = require("../shared/utils/index.js");
const {
  companyNameTableId,
  endDateInputId,
  paginationInputId,
  reportNameTableId,
  startDateInputId,
} = require("../shared/constant.js");

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

export const crawlData = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  const urlToCrawl = process.env.WEB_URL_TO_CRAWL;
  let currentPagination = 1;

  try {
    await driver.get(urlToCrawl);
    await waitPageLoad(driver);
    let rowIndex = 0;
    // await changeDateRange(driver, "10/10/2023", "05/11/2023");
    while (rowIndex < 2) {
      // <tr> là các thẻ chứa link báo cáo
      const trElements = await driver.findElements(By.xpath("//*[@_afrrk]"));
      // tìm thẻ <td> 1 chứa link báo cáo
      const tdElements = await trElements[rowIndex].findElements(By.css("td"));
      for (const [index, tdElement] of tdElements.entries()) {
        if (index === 1) {
          // Find and click the anchor element
          await navigateToReportDetail(tdElement);
          await waitPageLoad(driver);
          await delay(10);
          await startCrawl(driver);

          // Navigate back and wait for the page to load
          await driver.get(urlToCrawl);
          await waitPageLoad(driver);
          await delay(2);
          break;
        }
      }
      if (rowIndex === 1) {
        rowIndex = 0;
        currentPagination++;
        changePagination(driver, currentPagination);
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
const startCrawl = async (driver) => {
  try {
    const { businessCode, companyName, reportName } = await getBusinessInfo(
      driver
    );
    let tableOrder = 1;
    let crawlData = [];
    //crawl dữ liệu table đầu
    let tableData = await getTableData(driver, tableOrder);
    crawlData.push(tableData);
    tableData = [];
    // Bắt đầu bấm từ nút 2
    tableOrder++;

    // Có 3 nút cần bấm để chuyển tab

    while (tableOrder < 5) {
      await changeTab(driver, tableOrder);
      tableData = await getTableData(driver, tableOrder);
      crawlData.push(tableData);
      tableData = [];
      tableOrder++;
    }
    console.log(
      now() +
        "[CRAWL SUCCESS]:" +
        " " +
        businessCode +
        " " +
        companyName +
        " " +
        reportName
    );
    console.log(now() + "[crawledData]:", crawlData);
    return;
  } catch (err) {
    console.log(now() + " - [ERROR] crawl fail!!!" + err);
    console.log(err);
  }
};

// lấy dữ liệu mảng các row của 1 table
const getTableData = async (driver, tableOrder) => {
  const tableId = getTableId(tableOrder);
  const tableEl = await driver.findElement(By.id(tableId));
  const rowsDataEl = await tableEl.findElements(By.css("tr"));
  const tableData = await getDetailTableData(rowsDataEl);
  return tableData;
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
  const businessCodeContainerEl = headerEls[0];
  const businessCode = await businessCodeContainerEl.getText();

  console.log(
    now() +
      ": [Start crawling !!!]" +
      `Mã doanh nghiệp: ${businessCode}` +
      " " +
      `Tên công ty: ${companyName}` +
      " " +
      `Tiêu đề: ${reportName}`
  );

  return { companyName, reportName, businessCode };
};

async function waitForElementVisibleById(driver, elId) {
  let element = await driver.wait(until.elementLocated(By.id(elId)), 10000);
  await driver.wait(until.elementIsVisible(element), 10000);
  return;
}

// lấy thông tin chi tiết của table
const getDetailTableData = async (balanceSheetRowsEl) => {
  let tableData = [];
  for (const [rowIndex, balanceSheetRow] of balanceSheetRowsEl.entries()) {
    if (rowIndex === 0) continue;
    const dataEls = await balanceSheetRow.findElements(By.css("td"));
    let keyname, code, numberEndOfTerm, numberStartOfTerm;
    for (const [dataIndex, dataEl] of dataEls.entries()) {
      switch (dataIndex) {
        // cột có tên chỉ tiêu
        case 0:
          const keynameEl = await dataEl.findElement(By.css("span > span"));
          keyname = await keynameEl.getText();
          break;

        // Cột mã số chỉ tiêu
        case 1:
          const codeEl = await dataEl.findElement(By.css("span"));
          code = await codeEl.getText();
          break;

        // Cột có số cuối kỳ
        case 3:
          const numberEndOfTermEl = await dataEl.findElement(By.css("span"));
          numberEndOfTerm = await numberEndOfTermEl.getText();
          break;

        // Cột có số đầu kỳ
        case 4:
          const numberStartOfTermEl = await dataEl.findElement(By.css("span"));
          numberStartOfTerm = await numberStartOfTermEl.getText();
          break;

        default:
      }
    }
    const objectData = {
      keyname,
      code,
      numberEndOfTerm,
      numberStartOfTerm,
    };
    // console.log("[objectData]:", objectData);
    tableData.push(objectData);
  }
  console.log("[tableData]:", tableData);
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
