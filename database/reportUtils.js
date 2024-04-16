const db = require("../models");
const _ = require("lodash");
const { writeToFile, removeFirst0 } = require("../shared/utils");
const { Op } = require("sequelize");

const getReportTemplateId = async ({ businessTypeId }) => {
  const reportTemplate = await db.ReportTemplate.findOne({
    where: { businessTypeId },
  });

  if (_.isEmpty(reportTemplate)) {
    throw new Error(
      `Không tìm thấy reportTemplate ứng với businessTypeId: ${businessTypeId}`
    );
  }

  const { reportTemplateId } = reportTemplate;
  return reportTemplateId;
};

const getReportComponentTypeId = async ({ code }) => {
  const reportComponentType = await db.ReportComponentType.findOne({
    where: {
      code,
    },
  });

  if (_.isEmpty(reportComponentType)) {
    throw new Error(`Không tìm thấy reportComponentType ứng với code: ${code}`);
  }
  const { reportComponentTypeId } = reportComponentType;
  return reportComponentTypeId;
};

const getReportComponentId = async ({ reportTemplateId, code }) => {
  let reportComponentTypeId = await await getReportComponentTypeId({
    code,
  });

  const reportComponent = await db.ReportComponent.findOne({
    where: {
      reportTemplateId,
      reportComponentTypeId,
    },
  });

  if (_.isEmpty(reportComponent)) {
    throw new Error(
      `Không tìm thấy reportComponentType ứng với reportTemplateId: ${reportTemplateId} và reportComponentTypeId: ${reportComponentTypeId}`
    );
  }
  const { reportComponentId } = reportComponent;
  return reportComponentId;
};

const getReportNormId = async ({ publishNormCode, reportComponentId }) => {
  const reportNorm =
    (await db.ReportNorm.findOne({
      where: {
        publishNormCode: {
          // Bắt TH 01,02
          [Op.in]: [publishNormCode, removeFirst0(publishNormCode)],
        },
        reportComponentId,
      },
    })) ?? {};
  if (_.isEmpty(reportNorm)) {
    // throw new Error(
    //   `Không tìm thấy reportNorm ứng với publishNormCode: ${publishNormCode} và reportComponentId: ${reportComponentId}`
    // );
    console.log(
      `Không tìm thấy reportNorm ứng với publishNormCode: ${publishNormCode} và reportComponentId: ${reportComponentId}`
    );
    const missingReportNorm = {
      publishNormCode,
      reportComponentId,
    };
    // await writeToFile({
    //   filename: "missing_report_norm.json",
    //   content: `${JSON.stringify(missingReportNorm)},`,
    // });
  }
  const { reportNormId, normId } = reportNorm;
  return reportNormId;
};

const getReportNorm = async ({ reportNormId }) => {
  // console.log("[whereParams]:", whereParams);
  let reportNorm = await db.ReportNorm.findOne({
    where: { reportNormId },
  });

  if (!_.isEmpty(reportNorm)) {
    return reportNorm.toJSON();
  } else {
    return {};
  }
};

const getReportComponent = async ({ reportComponentId }) => {
  let reportComponent = await db.ReportComponent.findOne({
    where: { reportComponentId },
  });

  if (!_.isEmpty(reportComponent)) {
    return reportComponent.toJSON();
  } else {
    return {};
  }
};

const getReportComponentType = async ({ reportComponentTypeId }) => {
  let reportComponentType = await db.ReportComponentType.findOne({
    where: { reportComponentTypeId },
  });

  if (!_.isEmpty(reportComponentType)) {
    return reportComponentType.toJSON();
  } else {
    return {};
  }
};

const getReportData = async (whereParams = {}) => {
  // console.log("[whereParams]:", whereParams);

  const report = await db.ReportData.findOne({
    where: whereParams,
    include: [{ model: db.ReportDataDetail, as: "reportDataDetails" }],
  });
  let jsonReport = report.toJSON();
  let { reportDataDetails = [] } = jsonReport;

  for await (let reportDataDetail of reportDataDetails) {
    try {
      const { reportNormId } = reportDataDetail;
      const reportNorm = await getReportNorm({ reportNormId });
      const { reportComponentId } = reportNorm;
      const reportComponent = await getReportComponent({ reportComponentId });
      const { reportComponentTypeId } = reportComponent;
      const reportComponentType = await getReportComponentType({
        reportComponentTypeId,
      });
      const { code } = reportComponentType;
      reportDataDetail.code = code;
    } catch (err) {
      console.log("[ERR when get code report data detail:", err);
    }
  }
  if (!_.isEmpty(jsonReport)) {
    jsonReport.reportDataDetails = reportDataDetails;
    return jsonReport;
  } else {
    return {};
  }
};

const bulkCreateReportDataDetail = async (reportDataDetails) => {
  const t = db.sequelize.transaction();
  try {
    await db.ReportDataDetail.bulkCreate(reportDataDetails, {
      updateOnDuplicate: ["value", "original", "lastUpdate"],
      transaction: t,
    });
    await t.commit();
    console.log("[Insert data tính toán thành công]");
  } catch (err) {
    console.log("[Lỗi khi insert dữ liệu tính toán]:", err);
    await t.rollback();
  }
};

module.exports = {
  getReportTemplateId,
  getReportComponentTypeId,
  getReportComponentId,
  getReportNormId,
  getReportData,
  bulkCreateReportDataDetail
};
