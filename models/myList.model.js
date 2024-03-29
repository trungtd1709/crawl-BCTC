const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const MyList = sequelize.define("myLists", {
        myListId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING(256),
        accountId: DataTypes.INTEGER.UNSIGNED
    })
    return MyList;
}