module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "categories",
    {
      categoryId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING(256),
      },
      description: {
        type: Sequelize.STRING(1024),
      },
      readonly: {
        type: Sequelize.TINYINT,
      },
    },
    {
      timestamps: false,
    }
  );
  return Category;
};
