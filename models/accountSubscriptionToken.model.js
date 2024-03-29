const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
/**
 *
 * @param {Sequelize} sequelize
 * @param {sequelize} Sequelize
 */
module.exports = function (sequelize, Sequelize) {
  const AccountSubsriptionToken = sequelize.define(
    "accountSubscriptionToken",
    {
      accountSubscriptionTokenId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      accountId: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: { key: "accountId", model: "account" },
      },
      subscriptionToken: { type: Sequelize.JSON, unique: true },
    },
    {
      timestamps: false,
    }
  );
  return AccountSubsriptionToken;
};
