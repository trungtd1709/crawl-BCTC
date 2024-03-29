const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const OfflineDate = sequelize.define(
      "offlineDates",
      {
        date:{
          primaryKey: true,
          type:DataTypes.DATEONLY,
        },
        description:DataTypes.STRING(1024),
      },

      {
        timestamps: false,
      }
    );
    return OfflineDate;
  };
  