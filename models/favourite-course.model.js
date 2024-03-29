const sequelize = require("sequelize");
const { DataTypes, Sequelize } = require("sequelize");

/**
 *
 * @param {sequelize.Sequelize} sequelize
 */
module.exports = (sequelize) => {
  const FavouriteCourse = sequelize.define(
    "favouriteCourses",
    {
      favouriteCourseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      accountId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
    },
    {
      indexes: [
        {
          fields: ["accountId", "courseId"],
          unique: true,
          name: "courseId_accountId",
        },
      ],
    }
  );

  return FavouriteCourse;
};
