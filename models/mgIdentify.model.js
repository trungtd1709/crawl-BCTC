const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
/**
 *
 * @param {Sequelize} sequelize
 * @param {sequelize} Sequelize
 */
module.exports = (sequelize, Sequelize) => {
  const MgIdentifies = sequelize.define(
    "mgIdentifies",
    {
      mgIdentifyId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(1024),
      },
      description: {
        type: Sequelize.TEXT,
      },
      author: {
        type: Sequelize.STRING(128),
      },
      datetime: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM(["POSITIVE", "NEGATIVE", "NORMAL"]),
      },
    },
    { timestamps: false }
  );

  return MgIdentifies;
};
