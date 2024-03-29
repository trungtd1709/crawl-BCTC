


module.exports = (sequelize, Sequelize) => {
    const Webinars = sequelize.define("webinars", {
        webinarId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(256)
        },
        description: {
            type: Sequelize.TEXT
        },
        level: {
            type: Sequelize.STRING(32)
        },
        status: {
            type: Sequelize.STRING(16)
        },
        startTime: {
            type: Sequelize.DATE
        },
        accessLevel: {
            type: Sequelize.INTEGER
        },
        online: {
            type: Sequelize.INTEGER
        },
        link: {
            type: Sequelize.STRING(1024)
        },
        location: {
            type: Sequelize.STRING(1024)
        },
        thumbnail: {
            type: Sequelize.STRING(1024)
        },
        content: {
            type: Sequelize.TEXT
        },
        price: {
            type: Sequelize.INTEGER
        },
        accessDuration: Sequelize.INTEGER
    })
    return Webinars;
}