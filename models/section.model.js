module.exports = (sequelize, Sequelize) => {
  const CourseSection = sequelize.define(
    "courseSections",
    {
      sectionId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      courseId: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(256),
      },
      description: {
        type: Sequelize.STRING(1024),
      },
    },
    {
      timestamps: false,
    }
  );
  return CourseSection;
};
