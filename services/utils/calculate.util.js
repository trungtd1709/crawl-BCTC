const _ = require("lodash");
const { reportComponentTypeCode } = require("../../shared/constant");

const filterLCTT = (reportDataDetails = []) => {
  const filteredDataDetails = _.filter(
    reportDataDetails,
    (reportDataDetail) =>
      reportDataDetail?.code == reportComponentTypeCode.LCTT ||
      reportDataDetail?.code == reportComponentTypeCode.LCGT
  );
  return filteredDataDetails;
};

const filterKQKD = (reportDataDetails = []) => {
  const filteredDataDetails = _.filter(
    reportDataDetails,
    (reportDataDetail) => reportDataDetail?.code == reportComponentTypeCode.KQ
  );
  return filteredDataDetails;
};

module.exports = { filterLCTT, filterKQKD };
