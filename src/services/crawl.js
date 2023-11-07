import { Builder, By, Key, until } from "selenium-webdriver";
import {
  delay,
  getButtonChangeTabId,
  getTableId,
} from "../shared/utils/index.js";
import { paginationInputId } from "../shared/constant.js";

const waitPageLoad = async (driver) => {
  await driver.wait(async function () {
    const readyState = await driver.executeScript("return document.readyState");
    return readyState === "complete";
  }, 10000);
};

export const crawlData = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  const urlToCrawl = process.env.WEB_URL_TO_CRAWL;
  let currentPagination = 1;

  try {
    await driver.get(urlToCrawl);
    let rowIndex = 0;
    while (rowIndex < 5) {
      // Re-find trElements in each iteration
      const trElements = await driver.findElements(By.xpath("//*[@_afrrk]"));
      // Re-find tdElements for each trElement
      const tdElements = await trElements[rowIndex].findElements(By.css("td"));
      for (const [index, tdElement] of tdElements.entries()) {
        if (index === 1) {
          // Find and click the anchor element
          const anchorElement = await tdElement.findElement(By.css("a"));
          const anchorElementText = await anchorElement.getText();
          console.log("[Tên báo cáo]:", anchorElementText);
          await anchorElement.click();
          await waitPageLoad(driver);
          await delay(10);
          await startCrawl(driver);
          await delay(2);

          // Navigate back and wait for the page to load
          await driver.get(urlToCrawl);
          await waitPageLoad(driver);
          break;
          // await driver.wait(until.urlIs(urlToCrawl), 5000);
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
    console.error("Error:", error);
  } finally {
    // await driver.quit();
  }
};

// Khi đã vào trang chi tiết gọi hàm này bắt đầu lấy dữ liệu
const startCrawl = async (driver) => {
  try {
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

    console.log("[crawlData]:", crawlData);
    return;
  } catch (err) {
    console.log(err);
  }
};

// đổi tab table
const changeTab = async (driver, tableOrder) => {
  const buttonId = getButtonChangeTabId(tableOrder);
  await waitForElementVisibleById(driver, buttonId);
  const buttonChangeTab = await driver.findElement(By.id(buttonId));
  driver.executeScript("arguments[0].click();", buttonChangeTab);
  // await buttonChangeTab.click();
  await delay(5);
  return;
};

// lấy dữ liệu mảng các row của 1 table
const getTableData = async (driver, tableOrder) => {
  const tableId = getTableId(tableOrder);
  const tableEl = await driver.findElement(By.id(tableId));
  const rowsDataEl = await tableEl.findElements(By.css("tr"));
  const tableData = await getDetailTableData(rowsDataEl);
  return tableData;
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
          const numberEndOfTermElement = await dataEl.findElement(
            By.css("span")
          );
          numberEndOfTerm = await numberEndOfTermElement.getText();
          break;

        // Cột có số đầu kỳ
        case 4:
          const numberStartOfTermElement = await dataEl.findElement(
            By.css("span")
          );
          numberStartOfTerm = await numberStartOfTermElement.getText();
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
    console.log("[objectData]:", objectData);
    tableData.push(objectData);
  }
  console.log("[tableData]:", tableData);
  return tableData;
};

const changePagination = async (driver, value) => {
  let inputElement = await driver.findElement(By.id(paginationInputId));
  await inputElement.clear();
  await inputElement.sendKeys(value, Key.ENTER);
};
