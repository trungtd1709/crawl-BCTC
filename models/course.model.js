


module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("courses", {
        courseId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(256)
        },
        author: {
            type: Sequelize.STRING(256)
        },
        lecturerId:Sequelize.INTEGER.UNSIGNED,
        shortDescription:Sequelize.STRING(256),
        level: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.TEXT
        },
        content: {
            type: Sequelize.TEXT
        },
        video: {
            type: Sequelize.STRING(1024)
        },
        thumbnail: {
            type: Sequelize.STRING(1024)
        },
        price: {
            type: Sequelize.FLOAT
        },
        accessLevel: {
            type: Sequelize.INTEGER(4)
        },
        countSubscriber: {
            type: Sequelize.INTEGER
        },
        accessDuration: Sequelize.INTEGER
    })
    return Course;
}