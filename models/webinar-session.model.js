module.exports = (sequelize, Sequelize) => {
    const WebinarSessions = sequelize.define("webinarSessions", {
        sessionId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        webinarId: {
            type: Sequelize.INTEGER.UNSIGNED,
        },
        name: {
            type: Sequelize.STRING(256)
        },
        video: {
            type: Sequelize.STRING(1024)
        },
        time: {
            type: Sequelize.DATE
        },
        level: {
            type: Sequelize.STRING(128)
        },
        accessLevel: {
            type: Sequelize.INTEGER.UNSIGNED
        },
        description: {
            type: Sequelize.TEXT
        },
        thumbnail: {
            type: Sequelize.STRING(1024)
        }
    }, {
        timestamps: false
    })
    return WebinarSessions;
}