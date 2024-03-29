const sequelize = require("sequelize");

/**
 *
 * @param {sequelize.Sequelize} Sequelize
 */
module.exports = (Sequelize) => {
  const Question = Sequelize.define("questions", {
    questionId: {
      type: sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: sequelize.STRING,
    name: sequelize.STRING,
    phone: sequelize.STRING,
    question: sequelize.STRING,
    answer: sequelize.STRING,
  });

  return Question;
};
