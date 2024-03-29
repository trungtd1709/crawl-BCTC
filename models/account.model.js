


module.exports = (sequelize, Sequelize) =>{
    const Account = sequelize.define("accounts",{
        accountId:{
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        accountCode:{
            type: Sequelize.STRING(32)
        },        
        fullname:{
            type: Sequelize.STRING(128)
        },
        email:{
            type:Sequelize.STRING(128)
        },
        password:{
            type:Sequelize.STRING(256)
        },
        dob:{
            type:Sequelize.DATE
        },
        phone:{
            type:Sequelize.STRING(64)
        },
        token:{
            type:Sequelize.STRING(256)
        },
        expirationDate:{
            type:Sequelize.DATE
        },
        accessLevel:{
            type:Sequelize.INTEGER.UNSIGNED 
        },
        accountType:{
            type:Sequelize.STRING(16)
        },
        avatar:{
            type:Sequelize.STRING(1024)
        },
        newsNotification:{
            type:Sequelize.TINYINT
        },
        reportNotification:{
            type:Sequelize.TINYINT
        },
        earningNotification:{
            type:Sequelize.TINYINT
        },
        eventNotification:{
            type:Sequelize.TINYINT
        },
        stockAlertNotification:{
            type:Sequelize.TINYINT
        },
        memberExpirationDate:{
            type:Sequelize.DATE
        },
        referralCode: {
            type: Sequelize.STRING(64)
        },
        referralBy: {
            type: Sequelize.INTEGER.UNSIGNED
        },
        resetPasswordToken:{
            type: Sequelize.STRING(256)
        },
        expireResetPasswordToken:{
            type: Sequelize.DATE
        },
        activated:{
            type: Sequelize.TINYINT
        },
        activateToken:{
            type:Sequelize.STRING(256)
        },
        enablePushNotification:{
            type:Sequelize.TINYINT
        },
        enableEmailNotification:{
            type:Sequelize.TINYINT
        },
        fbId: Sequelize.STRING(256),
        accountType: Sequelize.ENUM('MG','FACEBOOK','GOOGLE')
    })
    return Account;
}