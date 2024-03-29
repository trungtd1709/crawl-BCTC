const db = require("../models");
const _ = require("lodash");

const connectDB = () => {
  try {
    db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const syncDB = async () => {
  try {
    await db.ReportComponent.sync({ alter: true });
    await db.ReportComponentType.sync({ alter: true });
    await db.ReportTemplate.sync({ alter: true });

    console.log("Sync successfully.");
  } catch (error) {
    console.error("Sync fail:", error);
  }
};

const getCompanyByBusinessPermit = async (businessPermit) => {
  const company = await db.Company.findOne({ where: { businessPermit } });
  if (_.isEmpty(company)) {
    return {};
  }
  return company;
};

module.exports = { connectDB, syncDB };
