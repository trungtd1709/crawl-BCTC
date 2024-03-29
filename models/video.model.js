/**
 * author: chiennguyen
 * copyright: MDC VietNam
 */


const { BASE_URL } = require("../config/env");
module.exports = (sequelize, Sequelize) => {
    const Video = sequelize.define("video", {
        videoId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(128)
        },
        description: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING(1024),
            // get() {
            //     const raw = this.getDataValue('url');
            //     if (raw?.startsWith('http')) return raw;
            //     else return `${BASE_URL}/uploads/${raw}`
            // }
        },
        categoryId: {
            type: Sequelize.INTEGER.UNSIGNED,
        },
        accessLevel: {
            type: Sequelize.INTEGER.UNSIGNED,
            get() {
                const raw = this.getDataValue('accessLevel')
                return parseInt(raw)
            }
        },
        thumbnail: {
            type: Sequelize.STRING(256),
        },
        inAcademy: {
            type: Sequelize.INTEGER
        },
        syncYouTube: {
            type: Sequelize.TINYINT
        },
        youtubePlaylistId: {
            type: Sequelize.STRING(128),
        },
        youtubePlaylistName: {
            type: Sequelize.STRING(256),
        }
    })
    return Video;
}
