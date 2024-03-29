const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const address = sequelize.define("address", {
        addressId: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },

        parentId: DataTypes.BIGINT.UNSIGNED,
        
        name: DataTypes.STRING(128),

        level: DataTypes.TINYINT,
    }, {
        timestamps: false
    })

    return address;
}
