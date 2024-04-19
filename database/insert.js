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

  reportData.reportDate = formatDate({ dateStr: reportData.reportDate });
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
      const { reportDataId } = dbReport;
      console.log("[Báo cáo đã tồn tại trong database]");
      for await (const reportDataDetail of reportDataDetails) {
        const { reportNormId } = reportDataDetail;
        const existedReportDetail = await db.ReportDataDetail.findOne({
          where: {
            reportDataId,
            reportNormId,
          },
          transaction: t,
        });

        if (!existedReportDetail) {
          const newReportDetail = await db.ReportDataDetail.create(
            {
              ...reportDataDetail,
              reportDataId,
            },
            {
              transaction: t,
            }
          );
          console.log("[Insert reportDataDetail thành công]");
        }
      }
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
    console.log("[Lỗi khi ghi dữ liệu vào database]:", err);
    await t.rollback();
  } finally {
    return;
  }
  //   const report = await db.ReportData.create;
};

module.exports = {
  insertReportToDB,
};
