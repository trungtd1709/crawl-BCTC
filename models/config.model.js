const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Config = sequelize.define(
    "config",
    {
      configId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      key: DataTypes.TEXT,
      value: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      timestamps: false,
    }
  );
  return Config;
};
