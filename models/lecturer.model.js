


module.exports = (sequelize, Sequelize) => {
    const Lecturer = sequelize.define("lecturers", {
        lecturerId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        fullname: {
            type: Sequelize.STRING(256)
        },
        title: {
            type: Sequelize.STRING(256)
        },
        biography:Sequelize.TEXT,
        avatar:Sequelize.STRING(1024)
        
    },{
        timestamps:false
    })
    return Lecturer;
}