const sequelize = require("sequelize");

/**
 *
 * @param {sequelize.Sequelize} Sequelize
 */
module.exports = (Sequelize) => {
  const IndustryIndex = Sequelize.define(
    "industryIndexes",
    {
      industryIndexId: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize.INTEGER.UNSIGNED,
      },
      industryId: sequelize.INTEGER.UNSIGNED,
      date: sequelize.DATE,
      index: sequelize.FLOAT,
    },
    {
      indexes: [
        {
          fields: ["industryId", "date"],
          unique: true,
          name: "industryId",
        },
      ],
    }
  );

  return IndustryIndex;
};
