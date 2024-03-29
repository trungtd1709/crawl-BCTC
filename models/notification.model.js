const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
/**
 *
 * @param {Sequelize} sequelize
 * @param {sequelize} Sequelize
 */
module.exports = function (sequelize, Sequelize) {
  const Notifications = sequelize.define(
    "notification",
    {
      notificationId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
      },
      date: {
        type: Sequelize.DATE,
      },
      sent: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
        allowNull: false,
      },
      accountId: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: null,
        references: {
          model: "account",
          key: "accountId",
        },
      },
      level: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: null,
      },

      type:{
        type: Sequelize.ENUM(['DEFAULT','WARNING'])
      }
    },
    {
      timestamps: false,
    }
  );
  return Notifications;
};
