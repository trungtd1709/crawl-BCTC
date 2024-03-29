module.exports = (sequelize, Sequelize) => {
    const Banner = sequelize.define("banners", {
        bannerId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(128)
        },
        image: {
            type: Sequelize.STRING(1024)
        },
        url: {
            type: Sequelize.STRING(1024)
        },
        type: {
            type: Sequelize.STRING(64)
        },
        onDisplay: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    })
    return Banner;
}