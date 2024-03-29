const { get } = require('lodash')

module.exports = (sequelize, Sequelize) => {
    const FAQ = sequelize.define("faqs", {
        faqId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        question: {
            type: Sequelize.STRING(256),
            get(){
                return _.toString(this.getDataValue('question')).replace(/<br>/g,'\n')
            }
        },
        answer: {
            type: Sequelize.STRING(1024),
            get(){
                return _.toString(this.getDataValue('answer')).replace(/<br>/g,'\n')
            }
        },
    })
    return FAQ;
}