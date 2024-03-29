const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

/**
 *
 * @param {sequelize.Sequelize} sequelize
 * @returns
 */
module.exports = (sequelize) => {
  const Order = sequelize.define("orders", {
    orderId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    orderCode: DataTypes.STRING(32),

    accountId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: { model: "accounts", key: "accountId" },
    },

    fullname: DataTypes.STRING(256),

    status: {
      type: DataTypes.ENUM([
        "PENDING",
        "VERIFIED",
        "SHIPPED",
        "COMPLETED",
        "CANCELED",
        "FAILED",
      ]),
      defaultValue: "PENDING",
    },

    shippingFee: DataTypes.INTEGER,

    totalPrice: DataTypes.INTEGER,

    actualPrice: DataTypes.INTEGER,

    phone: DataTypes.STRING(32),

    email: DataTypes.STRING(128),

    province: DataTypes.STRING(128),

    district: DataTypes.STRING(128),

    ward: DataTypes.STRING(128),

    address: DataTypes.STRING(1024),

    paymentChannel: DataTypes.ENUM("BANKTRANSFER", "VNPAY", "MOMO"),

    paymentTransactionId: DataTypes.STRING,

    cancelReason: DataTypes.STRING,
  });

  return Order;
};
