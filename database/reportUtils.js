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
    await writeToFile({
      filename: "missing_report_norm.json",
      content: `${JSON.stringify(missingReportNorm)},`,
    });
  }
  const { reportNormId, normId } = reportNorm;
  return reportNormId;
};

module.exports = {
  getReportTemplateId,
  getReportComponentTypeId,
  getReportComponentId,
  getReportNormId,
};
