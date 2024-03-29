module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("events", {
        eventId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(512)
        },
        description: {
            type: Sequelize.TEXT
        },
        time: {
            type: Sequelize.DATE
        },
        location: {
            type: Sequelize.STRING(512)
        }
    })
    return Event;
}