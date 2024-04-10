const db = require("../models");
const _ = require("lodash");
const { writeToFile } = require("../shared/utils");

const getCompanyByBusinessPermit = async ({ businessPermit }) => {
  if (!businessPermit) {
    throw new Error(`Chưa truyền businessPermit`);
  }
  const company = await db.Company.findOne({ where: { businessPermit } });
  if (_.isEmpty(company)) {
    // await writeToFile({
    //   filename: "missing_business_permit.txt",
    //   content: businessPermit,
    // });
    throw new Error(
      `Không tìm thấy công ty ứng với mã doanh nghiệp: ${businessPermit}`
    );
    return {};
  }
  return company;
};

module.exports = { getCompanyByBusinessPermit };
