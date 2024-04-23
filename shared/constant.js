const startPagination = 2;

const idButtonChangeTab2 = "pt2:KQKD::ti";
const idButtonChangeTab3 = "pt2:LCTT-TT::ti";
const idButtonChangeTab4 = "pt2:LCTT-GT::ti";
// const firstTableId = "pt2:tab1::body";  pt2:t2::db
const firstTableId = "pt2:BCDKT::body";
const secondTableId = "pt2:KQKD::body";
const thirdTableId = "pt2:LCTT-TT::body";
const fourthTableId = "pt2:LCTT-GT::body";
const paginationInputId = "pt9:t1::nb_in_pg";
const companyNameTableId = "pt2:plam3";
const reportNameTableId = "pt2:plam2";
const startDateInputId = "pt9:id1::content";
const endDateInputId = "pt9:id2::content";
const buttonSearchId = "pt9:b1";
const reportGeneralInfoTableId = "pt2:tt1::db";
const yearPeriodId = "pt2:tt1:1:lookupValueId::content";
const reportQuarterElId = "pt2:tt1:2:lookupValueId::content";
const reportNameTableClassname = "xuk p_AFCore p_AFDefault";
const paginationTableId = "pt9:t1::nb_cnt_pg";

const reportComponentTypeCode = {
  KQ: "KQ", // kết quả kinh doanh
  CD: "CD", // cân đối kế toán
  LCGT: "LCGT", // lưu chuyển tiền tệ gián tiếp
  CSTC: "CSTC",
  LCTT: "LCTT", // lưu chuyển tiền tệ trực tiếp
  HD: "HD",
  TS: "TS",
  TSR: "TSR",
  NB: "NB",
};

const reportTermTypeConst = {
  quarter: "QUARTER",
  year: "YEAR",
  half: "HALF",
};

const reportTermIdConst = {
  nam: 1,
  quy1: 2,
  quy2: 3,
  quy3: 4,
  quy4: 5,
  "6thangDauNam": 6,
  banNien: 9,
  "9thangDauNam": 12,
  "6thangCuoiNam": 18,
  "12thang": 36,
};

const auditStatusConst = {
  soatXet: 3,
  chuaKiemToan: 4,
  daKiemToan: 10,
  // 5-Tự tạm tính (Thông tin từ trang web CBTT ko có loại này)
  // 6-VST duyệt (Thông tin từ trang web CBTT ko có loại này)
};

const unitedStatusIdConst = {
  tongHop: 0,
  rieng: 1,
  me: 2,
};

const tableOrderConst = {
  BCDKT: 1,
  KQKD: 2,
  LCTT: 3,
  LCGT: 4,
};

const businessTypeIdConst = {
  CTCP: 1,
  CK: 2, // chung khoan
  NH: 3, // ngan hang
  BH1: 5, // bao hiem loai 1
  BH2: 6, // bao hiem loai 2
};

module.exports = {
  idButtonChangeTab2,
  idButtonChangeTab3,
  idButtonChangeTab4,
  firstTableId,
  secondTableId,
  thirdTableId,
  fourthTableId,
  paginationInputId,
  companyNameTableId,
  reportNameTableId,
  startDateInputId,
  endDateInputId,
  buttonSearchId,
  reportComponentTypeCode,
  reportGeneralInfoTableId,
  reportTermTypeConst,
  yearPeriodId,
  reportQuarterElId,
  reportTermIdConst,
  auditStatusConst,
  unitedStatusIdConst,
  reportNameTableClassname,
  startPagination,
  paginationTableId,
  tableOrderConst,
  businessTypeIdConst,
};
