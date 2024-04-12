const {
  reportTermTypeConst,
  reportTermIdConst,
  auditStatusConst,
  unitedStatusIdConst,
  reportComponentTypeCode,
} = require("../shared/constant");

const getReportTermType = ({ reportName }) => {
  let reportTermType = null;
  if (reportName.includes("quý")) {
    reportTermType = reportTermTypeConst.quarter;
  }
  if (reportName.includes("năm")) {
    reportTermType = reportTermTypeConst.year;
  }
  if (reportName.includes("bán niên")) {
    reportTermType = reportTermTypeConst.half;
  }
  return reportTermType;
};

const getReportTermId = ({ reportTermType, quarterPeriod }) => {
  let reportTermId = null;
  switch (reportTermType) {
    case reportTermTypeConst.quarter:
      switch (parseInt(quarterPeriod)) {
        case 1:
          reportTermId = reportTermIdConst.quy1;
          break;
        case 2:
          reportTermId = reportTermIdConst.quy2;
          break;
        case 3:
          reportTermId = reportTermIdConst.quy3;
          break;
        case 4:
          reportTermId = reportTermIdConst.quy4;
          break;

        default:
      }
      break;

    case reportTermTypeConst.half:
      reportTermId = reportTermIdConst.banNien;
      break;

    case reportTermTypeConst.year:
      reportTermId = reportTermIdConst.nam;
      break;

    default:
  }

  return reportTermId;
};

const getAuditStatusId = ({ toChucKiemToanValue, trichYeuValue }) => {
  let auditStatusId = null;
  if (!toChucKiemToanValue) {
    auditStatusId = auditStatusConst.chuaKiemToan;
  } else {
    const trichYeuLowerCase = trichYeuValue.toLowerCase();
    if (trichYeuLowerCase.includes("Soát xét")) {
      auditStatusId = auditStatusConst.soatXet;
    } else {
      auditStatusId = auditStatusConst.daKiemToan;
    }
  }

  return auditStatusId;
};

// loai cty bao cao
const getUnitedStatusId = ({ reportName }) => {
  const reportNameLowerCase = reportName.toLowerCase();
  let unitedStatusId = null;
  if (
    reportNameLowerCase.includes("hợp nhất") ||
    reportNameLowerCase.includes("tổng hợp")
  ) {
    unitedStatusId = unitedStatusIdConst.tongHop;
  }
  if (reportNameLowerCase.includes("riêng")) {
    unitedStatusId = unitedStatusIdConst.rieng;
  }
  if (reportNameLowerCase.includes("mẹ")) {
    unitedStatusId = unitedStatusIdConst.me;
  }

  return unitedStatusId;
};

//
const getTableCode = ({ tableOrder }) => {
  let code;
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

  return code;
};

module.exports = {
  getReportTermType,
  getReportTermId,
  getAuditStatusId,
  getUnitedStatusId,getTableCode
};
