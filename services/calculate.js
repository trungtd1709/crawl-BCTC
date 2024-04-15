const { getReportData } = require("../database/reportUtils");
const db = require("../models");
const {
  reportTermIdConst,
  reportTermTypeConst,
} = require("../shared/constant");
const _ = require("lodash");

const calculate = async () => {
  const reportData = await getReportData({
    reportTermId: reportTermIdConst.quy3,
  });
  console.log(reportData);

  if (_.isEmpty(reportData)) {
    return;
  }

  if (reportData?.reportTermId == reportTermIdConst.quy3) {
    const { auditStatusId, isAdjusted, stockCode, unitedStatusId, yearPeriod } =
      reportData;

    const whereParams = {
      auditStatusId,
      isAdjusted,
      stockCode,
      unitedStatusId,
      yearPeriod,
    };

    const reportDataBanNien = await getReportData({
      ...whereParams,
      reportTermId: reportTermIdConst.banNien,
    });

    const reportData9ThangDauNam = await getReportData({
      ...whereParams,
      reportTermId: reportTermIdConst["9thangDauNam"],
    });
  }

  if (reportData.reportTermId == reportTermIdConst.quy2) {
    const { auditStatusId, isAdjusted, stockCode, unitedStatusId, yearPeriod } =
      reportData;

    const whereParams = {
      auditStatusId,
      isAdjusted,
      stockCode,
      unitedStatusId,
      yearPeriod,
    };

    const reportDataBanNien = await getReportData({
      ...whereParams,
      reportTermId: reportTermIdConst.banNien,
    });

    const reportDataQuy1 = await getReportData({
      ...whereParams,
      reportTermId: reportTermIdConst.quy1,
    });
  }
};

module.exports = { calculate };
