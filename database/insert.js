const db = require("../models");
const _ = require("lodash");
const { formatDate, now } = require("../shared/utils");

const insertReport = async ({ reportData }) => {
  let { reportDataDetails = [] } = reportData;

  // reportData.reportDate = formatDate({ dateStr: reportData.reportDate });
  try {
    let isValidReportData = true;
    let allValuesAreZero = true;
    for (const reportDataDetail of reportDataDetails) {
      const { reportNormId, value } = reportDataDetail;
      if (!reportNormId) {
        isValidReportData = false;
        break;
      }
      if (value) {
        allValuesAreZero = false;
      }
    }

    if (allValuesAreZero) {
      isValidReportData = false;
    }

    if (isValidReportData) {
      await insertReportToDb({ reportData });
    } else {
      await insertReportDataDraftToDb({ reportDataDraft: reportData });
    }
  } catch (err) {
    console.log("[Lỗi khi ghi dữ liệu vào database]:", err);
  } finally {
    return;
  }
};

const insertReportToDb = async ({ reportData }) => {
  let {
    stockCode,
    reportTermId,
    yearPeriod,
    auditStatusId,
    isAdjusted,
    unitedStatusId,
    reportDataDetails = [],
  } = reportData;

  // reportData.reportDate = formatDate({ dateStr: reportData.reportDate });
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
};

const insertReportDataDraftToDb = async ({ reportDataDraft }) => {
  const t = await db.sequelize.transaction();
  try {
    let {
      businessPermit,
      reportTermId,
      yearPeriod,
      auditStatusId,
      isAdjusted,
      unitedStatusId,
      reportDataDetails
    } = reportDataDraft;

    const existedDraft = await db.ReportDataDraft.findOne({
      where: {
        businessPermit,
        reportTermId,
        yearPeriod,
        auditStatusId,
        isAdjusted,
        unitedStatusId,
      },
      transaction: t,
    });

    if (!_.isEmpty(existedDraft)) {
      await t.commit();
      throw new Error(`${now()}: Báo cáo Draft đã tồn tại trong đb`);
      return;
    }

    reportDataDraft.reportDataDetailDrafts = reportDataDetails;

    await db.ReportDataDraft.create(reportDataDraft, {
      include: [
        { model: db.ReportDataDetailDraft, as: "reportDataDetailDrafts" },
      ],
      transaction: t,
    });
    await t.commit();
    console.log(`${now()}: INSERT REPORT DATA DRAFT thành công`);
  } catch (err) {
    console.log(err);
    await t.rollback();
  }
};

module.exports = {
  insertReport,
  insertReportDataDraftToDb,
};
