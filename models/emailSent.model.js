/* eslint-disable @typescript-eslint/no-shadow */
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const { BASE_URL } = require('../config/env');

/**
 *
 * @param {Sequelize} sequelize
 * @param {sequelize} Sequelize
 * @returns
 */
module.exports = sequelize => {
  const EmailSent = sequelize.define('emailSent', {
    emailSentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    messageId: {
      type: DataTypes.TEXT,
    },
    accountId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: { model: 'account', key: 'accountId' },
    },
    alertId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: { model: 'alerts', key: 'alertId' },
    },
    value: {
      type: DataTypes.FLOAT,
    },
    time: {
      type: DataTypes.DATE,
    },
    type: DataTypes.ENUM(
      'ALERT',
      'VIP_EXPIRATION_WARNING',
      'VIP_EXPIRATION_NOTIFICATION',
      'COURSE_EXPIRATION_WARNING',
      'COURSE_EXPIRATION_NOTIFICATION',
    ),
    metadata: DataTypes.JSON,
  });
  return EmailSent;
};
