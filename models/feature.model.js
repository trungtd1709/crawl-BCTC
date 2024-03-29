const { get } = require('lodash')

module.exports = (sequelize, Sequelize) => {
    const Feature = sequelize.define("features", {
        featureCode: {
            type: Sequelize.STRING(128),
            primaryKey: true,           
        },
        featureName: {
            type: Sequelize.STRING(256),            
        },
    },{
        timestamps: false
    })
    return Feature;
}