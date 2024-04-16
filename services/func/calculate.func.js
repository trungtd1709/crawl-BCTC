const _ = require("lodash");
const {
  getReportData,
  bulkCreateReportDataDetail,
} = require("../../database/reportUtils");
const { reportTermIdConst } = require("../../shared/constant");
const { filterLCTT, filterKQKD } = require("../utils/calculate.util");

const calculateLcttQuy2 = async ({
  reportDataQuy1,
  reportDataBanNien,
  reportDataQuy2,
}) => {
  let reportDataDetailsQuy2 = [];

  const reportDetailsBanNien = filterLCTT(reportDataBanNien?.reportDataDetails);
  const reportDetailsQuy1 = filterLCTT(reportDataQuy1?.reportDataDetails);

  if (_.isEmpty(reportDetailsQuy1) || _.isEmpty(reportDetailsBanNien)) {
    console.log("[Không đủ dữ liệu tính toán]");
    return;
  }

  const { reportDataId } = reportDataQuy2;

  if (!reportDataId) {
    console.log("Không tìm thấy reportDataQuy1 tương ứng");
    return;
  }

  // tìm report norm id tương ứng của 2 report rồi tính
  for await (const reportDetailBanNien of reportDetailsBanNien) {
    const { reportNormId } = reportDetailQuy1;

    const reportDetailQuy1 = _.find(reportDetailsQuy1, {
      reportNormId,
    });

    if (!_.isEmpty(reportDetailQuy1)) {
      const valueQuy1 = reportDetailQuy1.value;
      const valueBanNien = reportDetailBanNien.value;

      const valueQuy2 = valueBanNien - valueQuy1;

      const reportDataDetailQuy2 = {
        reportNormId,
        value: valueQuy2,
        reportDataId,
        lastUpdate: new Date(),
        original: false,
      };

      if (valueQuy2 || !_.isNaN(valueQuy2)) {
        reportDataDetailsQuy2.push(reportDataDetailQuy2);
      }
    } else {
      continue;
    }
  }

  await bulkCreateReportDataDetail(reportDataDetailsQuy2);
};

const calculateKqkdBanNien = async ({
  reportDataQuy1,
  reportDataQuy2,
  reportDataBanNien,
}) => {
  let reportDataDetailsBanNien = [];

  const reportDetailsQuy1 = filterKQKD(reportDataQuy1?.reportDataDetails);
  const reportDetailsQuy2 = filterKQKD(reportDataQuy2?.reportDataDetails);

  if (_.isEmpty(reportDetailsQuy1) || _.isEmpty(reportDetailsQuy2)) {
    console.log("[Không đủ dữ liệu tính toán]");
    return;
  }

  const { reportDataId } = reportDataBanNien;

  if (!reportDataId) {
    console.log("Không tìm thấy reportDataBanNien tương ứng");
    return;
  }

  // tìm report norm id tương ứng của 2 report rồi tính
  for await (const reportDetailQuy1 of reportDetailsQuy1) {
    const { reportNormId } = reportDetailQuy1;

    const reportDetailQuy2 = _.find(reportDetailsQuy2, {
      reportNormId,
    });

    if (!_.isEmpty(reportDetailQuy2)) {
      const valueQuy1 = reportDetailQuy1.value;
      const valueQuy2 = reportDetailQuy2.value;

      const valueBanNien = valueQuy1 + valueQuy2;

      const reportDataDetailBanNien = {
        reportNormId,
        value: valueBanNien,
        reportDataId,
        lastUpdate: new Date(),
        original: false,
      };

      if (valuvalueBanNieneQuy2 || !_.isNaN(valueBanNien)) {
        reportDataDetailsBanNien.push(reportDataDetailBanNien);
      }
    } else {
      continue;
    }
  }

  await bulkCreateReportDataDetail(reportDataDetailsBanNien);
};

const calculateLcttQuy3 = async ({
  reportDataQuy3,
  reportDataBanNien,
  reportData9Thang,
}) => {
  let reportDataDetailsQuy3 = [];

  const reportDetailsBanNien = filterLCTT(reportDataBanNien?.reportDataDetails);
  const reportDetails9Thang = filterLCTT(reportData9Thang?.reportDataDetails);

  if (_.isEmpty(reportDetails9Thang) || _.isEmpty(reportDetailsBanNien)) {
    console.log("[Không đủ dữ liệu tính toán]");
    return;
  }

  const { reportDataId } = reportDataQuy3;

  if (!reportDataId) {
    console.log("Không tìm thấy reportDataQuy3 tương ứng");
    return;
  }

  // tìm report norm id tương ứng của 2 report rồi tính
  for await (const reportDetailBanNien of reportDetailsBanNien) {
    const { reportNormId } = reportDetailBanNien;

    const reportDetail9Thang = _.find(reportDetails9Thang, {
      reportNormId,
    });

    if (!_.isEmpty(reportDetail9Thang)) {
      const value9Thang = reportDetail9Thang.value;
      const valueBanNien = reportDetailBanNien.value;

      const valueQuy3 = value9Thang - valueBanNien;

      const reportDataDetailQuy3 = {
        reportNormId,
        value: valueQuy3,
        reportDataId,
        lastUpdate: new Date(),
        original: false,
      };

      if (valueQuy3 || !_.isNaN(valueQuy3)) {
        reportDataDetailsQuy3.push(reportDataDetailQuy3);
      }
    } else {
      continue;
    }
  }

  await bulkCreateReportDataDetail(reportDataDetailsQuy3);
};

const calculateKqkd9Thang = async ({
  reportDataQuy1,
  reportDataQuy2,
  reportDataQuy3,
  reportData9Thang,
}) => {
  let reportDataDetails9Thang = [];

  const reportDetailsQuy1 = filterKQKD(reportDataQuy1?.reportDataDetails);
  const reportDetailsQuy2 = filterKQKD(reportDataQuy2?.reportDataDetails);
  const reportDetailsQuy3 = filterKQKD(reportDataQuy3?.reportDataDetails);

  if (
    _.isEmpty(reportDetailsQuy1) ||
    _.isEmpty(reportDetailsQuy2) ||
    _.isEmpty(reportDetailsQuy3)
  ) {
    console.log("[Không đủ dữ liệu tính toán]");
    return;
  }

  const { reportDataId } = reportData9Thang;

  if (!reportDataId) {
    console.log("Không tìm thấy reportData9Thang tương ứng");
    return;
  }

  // tìm report norm id tương ứng của 2 report rồi tính
  for await (const reportDetailQuy1 of reportDetailsQuy1) {
    const { reportNormId } = reportDetailQuy1;

    const reportDetailQuy2 = _.find(reportDetailsQuy2, {
      reportNormId,
    });

    const reportDetailQuy3 = _.find(reportDetailsQuy3, {
      reportNormId,
    });

    if (!_.isEmpty(reportDetailQuy2) && !_.isEmpty(reportDetailQuy3)) {
      const valueQuy1 = reportDetailQuy1.value;
      const valueQuy2 = reportDetailQuy2.value;
      const valueQuy3 = reportDetailQuy3.value;

      const value9Thang = valueQuy1 + valueQuy2 + valueQuy3;

      const reportDataDetail9Thang = {
        reportNormId,
        value: value9Thang,
        reportDataId,
        lastUpdate: new Date(),
        original: false,
      };

      if (value9Thang || !_.isNaN(value9Thang)) {
        reportDataDetails9Thang.push(reportDataDetail9Thang);
      }
    } else {
      continue;
    }
  }

  await bulkCreateReportDataDetail(reportDataDetails9Thang);
};

const calculateLcttQuy4 = async ({
  reportData12Thang,
  reportData9Thang,
  reportDataQuy4,
}) => {
  let reportDataDetailsQuy4 = [];

  const reportDetails12Thang = filterLCTT(reportData12Thang?.reportDataDetails);
  const reportDetails9Thang = filterLCTT(reportData9Thang?.reportDataDetails);

  if (_.isEmpty(reportDetails9Thang) || _.isEmpty(reportDetails12Thang)) {
    console.log("[Không đủ dữ liệu tính toán]");
    return;
  }

  const { reportDataId } = reportDataQuy4;

  if (!reportDataId) {
    console.log("Không tìm thấy reportDataQuy4 tương ứng");
    return;
  }

  // tìm report norm id tương ứng của 2 report rồi tính
  for await (const reportDetail9Thang of reportDetails9Thang) {
    const { reportNormId } = reportDetail9Thang;

    const reportDetail12Thang = _.find(reportDetails12Thang, {
      reportNormId,
    });

    if (!_.isEmpty(reportDetail12Thang)) {
      const value12Thang = reportDetail12Thang.value;
      const value9Thang = reportDetail9Thang.value;

      const valueQuy4 = value12Thang - value9Thang;

      const reportDataDetailQuy4 = {
        reportNormId,
        value: valueQuy4,
        reportDataId,
        lastUpdate: new Date(),
        original: false,
      };

      if (valueQuy4 || !_.isNaN(valueQuy4)) {
        reportDataDetailsQuy4.push(reportDataDetailQuy4);
      }
    } else {
      continue;
    }
  }

  await bulkCreateReportDataDetail(reportDataDetailsQuy4);
};

const calculateKqkd12Thang = async ({
  reportDataQuy1,
  reportDataQuy2,
  reportDataQuy3,
  reportDataQuy4,
  reportData12Thang,
}) => {
  let reportDataDetails12Thang = [];

  const reportDetailsQuy1 = filterKQKD(reportDataQuy1?.reportDataDetails);
  const reportDetailsQuy2 = filterKQKD(reportDataQuy2?.reportDataDetails);
  const reportDetailsQuy3 = filterKQKD(reportDataQuy3?.reportDataDetails);
  const reportDetailsQuy4 = filterKQKD(reportDataQuy4?.reportDataDetails);

  if (
    _.isEmpty(reportDetailsQuy1) ||
    _.isEmpty(reportDetailsQuy2) ||
    _.isEmpty(reportDetailsQuy3) ||
    _.isEmpty(reportDetailsQuy4)
  ) {
    console.log("[Không đủ dữ liệu tính toán]");
    return;
  }

  const { reportDataId } = reportData12Thang;

  if (!reportDataId) {
    console.log("Không tìm thấy reportData12Thang tương ứng");
    return;
  }

  // tìm report norm id tương ứng của 2 report rồi tính
  for await (const reportDetailQuy1 of reportDetailsQuy1) {
    const { reportNormId } = reportDetailQuy1;

    const reportDetailQuy2 = _.find(reportDetailsQuy2, {
      reportNormId,
    });

    const reportDetailQuy3 = _.find(reportDetailsQuy3, {
      reportNormId,
    });

    const reportDetailQuy4 = _.find(reportDetailsQuy4, {
      reportNormId,
    });

    if (
      !_.isEmpty(reportDetailQuy2) &&
      !_.isEmpty(reportDetailQuy3) &&
      !_.isEmpty(reportDetailQuy4)
    ) {
      const valueQuy1 = reportDetailQuy1.value;
      const valueQuy2 = reportDetailQuy2.value;
      const valueQuy3 = reportDetailQuy3.value;
      const valueQuy4 = reportDetailQuy3.value;

      const value12Thang = valueQuy1 + valueQuy2 + valueQuy3 + valueQuy4;

      const reportDataDetail12Thang = {
        reportNormId,
        value: value12Thang,
        reportDataId,
        lastUpdate: new Date(),
        original: false,
      };

      if (value12Thang || !_.isNaN(value12Thang)) {
        reportDataDetails12Thang.push(reportDataDetail12Thang);
      }
    } else {
      continue;
    }
  }

  await bulkCreateReportDataDetail(reportDataDetails12Thang);
};

module.exports = { calculateLcttQuy2, calculateKqkdBanNien, calculateLcttQuy3 };
