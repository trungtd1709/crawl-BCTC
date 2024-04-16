const {
  getReportData,
  bulkCreateReportDataDetail,
} = require("../database/reportUtils");
const db = require("../models");
const {
  reportTermIdConst,
  reportTermTypeConst,
  reportComponentTypeCode,
} = require("../shared/constant");
const _ = require("lodash");
const { filterLCTT, filterKQKD } = require("./utils/calculate.util");
const { calculateLcttQuy2 } = require("./func/calculate.func");

const calculate = async () => {
  const reportData = await getReportData({
    reportTermId: reportTermIdConst["9thangDauNam"],
  });
  console.log(reportData);

  if (_.isEmpty(reportData)) {
    return;
  }

  const {
    auditStatusId,
    isAdjusted,
    stockCode,
    unitedStatusId,
    yearPeriod,
    reportTermId,
  } = reportData;

  const whereParams = {
    auditStatusId,
    isAdjusted,
    stockCode,
    unitedStatusId,
    yearPeriod,
  };

  switch (reportTermId) {
    // TH bao cao quy 1 thay doi
    case reportTermIdConst.quy1: {
      const reportDataQuy1 = reportData;
      const reportDataQuy2 = await db.ReportData.findOne({
        where: { ...whereParams, reportTermId: reportTermIdConst.quy2 },
      });
      const reportDataBanNien = await getReportData({
        ...whereParams,
        reportTermId: reportTermIdConst.banNien,
      });
      await calculateLcttQuy2({
        reportDataQuy1,
        reportDataQuy2,
        reportDataBanNien,
      });
      break;
    }

    // TH báo cáo bán niên thay đổi
    case reportTermIdConst.banNien: {
      const reportDataQuy1 = await getReportData({
        ...whereParams,
        reportTermId: reportTermIdConst.quy1,
      });
      const reportDataQuy2 = await db.ReportData.findOne({
        where: { ...whereParams, reportTermId: reportTermIdConst.quy2 },
      });
      const reportDataBanNien = reportData;
      await calculateLcttQuy2({
        reportDataQuy1,
        reportDataQuy2,
        reportDataBanNien,
      });

      break;
    }

    default:
  }

  // if (reportData.reportTermId == reportTermIdConst.quy2) {
  //   const { auditStatusId, isAdjusted, stockCode, unitedStatusId, yearPeriod } =
  //     reportData;

  //   const whereParams = {
  //     auditStatusId,
  //     isAdjusted,
  //     stockCode,
  //     unitedStatusId,
  //     yearPeriod,
  //   };

  //   const reportDataBanNien = await getReportData({
  //     ...whereParams,
  //     reportTermId: reportTermIdConst.banNien,
  //   });

  //   const reportDataQuy1 = await getReportData({
  //     ...whereParams,
  //     reportTermId: reportTermIdConst.quy1,
  //   });
  // }
};

module.exports = { calculate };
