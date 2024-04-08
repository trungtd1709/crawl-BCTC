const db = require("../models");
const _ = require("lodash");
const { formatDate } = require("../shared/utils");

const insertReportToDB = async ({ reportData }) => {
  let {
    stockCode,
    reportTermId,
    yearPeriod,
    auditStatusId,
    isAdjusted,
    unitedStatusId,
    reportDataDetails,
  } = reportData;

  reportData.reportDate = formatDate(reportData.reportDate);
  const t = await db.sequelize.transaction();
  try {
    const dbReport = await db.ReportData.findOne({
      where: {
        stockCode,
        reportTermId,
        yearPeriod,
        auditStatusId,
        isAdjusted,
        unitedStatusId,
      },
      transaction: t,
    });

    if (!_.isEmpty(dbReport)) {
      console.log("[Báo cáo đã tồn tại trong database]:");
      //   await db.ReportData.update({}, { transaction: t });
    } else {
      const newReport = await db.ReportData.create(reportData, {
        include: [{ model: db.ReportDataDetail, as: "reportDataDetails" }],
        transaction: t,
      });

      console.log("[INSERT report thành công]");
    }
    await t.commit();
  } catch (err) {
    console.log("[Loi khi ghi du lieu vao db]:", err);
    await t.rollback();
  } finally {
    return;
  }
  //   const report = await db.ReportData.create;
};

module.exports = {
  insertReportToDB,
};
