const {
  firstTableId,
  fourthTableId,
  idButtonChangeTab2,
  idButtonChangeTab3,
  idButtonChangeTab4,
  secondTableId,
  thirdTableId,
} = require("../constant.js");
const fs = require("fs");
const dayjs = require("dayjs");
const moment = require("moment");

const delay = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const getTableId = (order) => {
  let tableId;
  switch (order) {
    case 1:
      tableId = firstTableId;
      break;
    case 2:
      tableId = secondTableId;
      break;
    case 3:
      tableId = thirdTableId;
      break;
    case 4:
      tableId = fourthTableId;
      break;
    default:
    // code block
  }
  // const tableId = `pt2:tab${order}::body`;
  return tableId;
};

const getButtonChangeTabId = (order) => {
  let buttonId;
  switch (order) {
    // case 1:
    //   tableId = firstTableId;
    //   break;
    case 2:
      buttonId = idButtonChangeTab2;
      break;
    case 3:
      buttonId = idButtonChangeTab3;
      break;
    case 4:
      buttonId = idButtonChangeTab4;
      break;
    default:
    // code block
  }
  // const buttonId = `pt2:tab${order}::ti`;
  return buttonId;
};

const now = () => {
  let today = dayjs();
  return today.format("YYYY-MM-DD HH:mm:ss").toString();
};

const stringToFloat = (str) => {
  // let str = "1,900,500.05";
  let number = parseFloat(str.replace(/,/g, ""));
  return number;
};

async function writeToFile({ content, filename }) {
  fs.appendFile(filename, `${content}\n`, "utf8", (error) => {
    if (error) {
      console.error("[Error writing file]:", error);
    } else {
      console.log("File written successfully");
    }
  });
}

async function cleanFile({ filename }) {
  fs.writeFile(filename, ``, "utf8", (error) => {
    if (error) {
      console.error("Error writing file:", error);
    } else {
      console.log("File written successfully");
    }
  });
}

const stringToInt = (str) => {
  let cleanString = str.replace(/,/g, "");
  const intValue = parseInt(cleanString);
  return intValue;
};

const removeFirst0 = (str) => {
  let newStr = str;
  if (str.charAt(0) === "0") {
    newStr = str.slice(1);
  }
  return newStr;
};

const formatDate = ({
  dateStr,
  originalDateFormat = "DD/MM/YYYY",
  formattedDateFormat = "YYYY-MM-DD",
}) => {
  const dateObj = moment(dateStr, originalDateFormat);
  const formatedDate = dateObj.format(formattedDateFormat);
  return formatedDate;
};

module.exports = {
  delay,
  getTableId,
  getButtonChangeTabId,
  now,
  stringToFloat,
  writeToFile,
  stringToInt,
  removeFirst0,
  formatDate,
};
