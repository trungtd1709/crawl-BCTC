const sequelize = require("sequelize");
const { DataTypes } = sequelize;

module.exports = (sequelize) => {
  const CourseLession = sequelize.define("courseLessions", {
    lessionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    courseId: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: DataTypes.STRING(256),
    },
    description: {
      type: DataTypes.STRING(1024),
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    video: {
      type: DataTypes.STRING(1024),
    },
    accessLevel: {
      type: DataTypes.INTEGER,
    },
    sectionId: {
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.TEXT,
    },
    files: {
      type: DataTypes.JSON,
      get() {
        let raw = this.getDataValue("files");
        if (!Array.isArray(raw)) return [];
        return raw;
      },
    },
    trial: DataTypes.BOOLEAN,
  });
  return CourseLession;
};
