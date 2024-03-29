const {
  firstTableId,
  fourthTableId,
  idButtonChangeTab2,
  idButtonChangeTab3,
  idButtonChangeTab4,
  secondTableId,
  thirdTableId,
} = require("../constant.js");

const dayjs = require("dayjs");

export const delay = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

export const getTableId = (order) => {
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

export const getButtonChangeTabId = (order) => {
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

export const now = () => {
  let today = dayjs();
  return today.format("YYYY-MM-DD HH:mm:ss").toString();
};

export const stringToFloat = (str) => {
  // let str = "1,900,500.05";
  let number = parseFloat(str.replace(/,/g, ""));
  return number;
};
