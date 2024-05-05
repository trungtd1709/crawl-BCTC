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
const {
  calculateLcttQuy2,
  calculateKqkdBanNien,
  calculateKqkd9Thang,
  calculateKqkd12Thang,
  calculateLcttQuy3,
  calculateLcttQuy4,
} = require("./func/calculate.func");

const calculate = async () => {
  const reportData = await getReportData({
    reportTermId: reportTermIdConst["quy1"],
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

  let reportDataQuy1;
  // = await db.ReportData.findOne({
  //   where: { ...whereParams, reportTermId: reportTermIdConst.quy1 },
  // });
  let reportDataQuy2;
  //  = await db.ReportData.findOne({
  //   where: { ...whereParams, reportTermId: reportTermIdConst.quy2 },
  // });
  let reportDataQuy3;
  // = await db.ReportData.findOne({
  //   where: { ...whereParams, reportTermId: reportTermIdConst.quy3 },
  // });
  let reportDataQuy4;
  //  = await db.ReportData.findOne({
  //   where: { ...whereParams, reportTermId: reportTermIdConst.quy4 },
  // });
  let reportDataBanNien;
  // = await getReportData({
  //   ...whereParams,
  //   reportTermId: reportTermIdConst.banNien,
  // });
  let reportData9Thang;
  //  = await getReportData({
  //   ...whereParams,
  //   reportTermId: reportTermIdConst["9thangDauNam"],
  // });
  let reportData12Thang;
  //  = await getReportData({
  //   ...whereParams,
  //   reportTermId: reportTermIdConst["12thang"],
  // });

  switch (reportTermId) {
    // TH bao cao quy 1 thay doi
    case reportTermIdConst.quy1: {
      reportDataQuy1 = reportData;
      await calculateLcttQuy2({
        reportDataQuy1,
        reportDataQuy2,
        reportDataBanNien,
        whereParams,
      });

      await calculateKqkdBanNien({
        reportDataQuy1,
        reportDataQuy2,
        reportDataBanNien,
        whereParams,
      });

      await calculateKqkd9Thang({
        reportDataQuy1,
        reportDataQuy2,
        reportDataQuy3,
        reportData9Thang,
        whereParams,
      });

      await calculateKqkd12Thang({
        reportDataQuy1,
        reportDataQuy2,
        reportDataQuy3,
        reportDataQuy4,
        reportData12Thang,
        whereParams,
      });
      break;
    }

    // TH báo cáo bán niên thay đổi
    case reportTermIdConst.quy2: {
      reportDataQuy2 = reportData;
      await calculateKqkdBanNien({
        reportDataQuy1,
        reportDataQuy2,
        reportDataBanNien,
        whereParams,
      });

      await calculateKqkd9Thang({
        reportDataQuy1,
        reportDataQuy2,
        reportDataQuy3,
        reportData9Thang,
        whereParams,
      });

      await calculateKqkd12Thang({
        reportDataQuy1,
        reportDataQuy2,
        reportDataQuy3,
        reportDataQuy4,
        reportData12Thang,
        whereParams,
      });
      break;
    }

    case reportTermIdConst.quy3: {
      reportDataQuy3 = reportData;

      await calculateKqkd9Thang({
        reportDataQuy1,
        reportDataQuy2,
        reportDataQuy3,
        reportData9Thang,
        whereParams,
      });

      await calculateKqkd12Thang({
        reportDataQuy1,
        reportDataQuy2,
        reportDataQuy3,
        reportDataQuy4,
        reportData12Thang,
        whereParams,
      });
      break;
    }

    case reportTermIdConst.quy4: {
      reportDataQuy4 = reportData;
    }

    case reportTermIdConst.banNien: {
      reportDataBanNien = reportData;

      await calculateLcttQuy2({
        reportDataQuy1,
        reportDataQuy2,
        reportDataBanNien,
        whereParams,
      });

      await calculateLcttQuy3({
        reportDataQuy3,
        reportDataBanNien,
        reportData9Thang,
        whereParams,
      });
    }

    case reportTermIdConst["9thangDauNam"]: {
      reportData9Thang = reportData;
      await calculateLcttQuy3({
        reportDataQuy3,
        reportDataBanNien,
        reportData9Thang,
        whereParams,
      });

      await calculateLcttQuy4({
        reportData9Thang,
        reportDataQuy4,
        reportData12Thang,
        whereParams,
      });
    }

    default:
  }
};

module.exports = { calculate };
