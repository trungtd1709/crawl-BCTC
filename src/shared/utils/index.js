export const delay = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

export const getTableId = (order) => {
  const tableId = `pt2:tab${order}::body`;
  return tableId;
};

export const getButtonChangeTabId = (order) => {
  const buttonId = `pt2:tab${order}::ti`;
  return buttonId;
};
