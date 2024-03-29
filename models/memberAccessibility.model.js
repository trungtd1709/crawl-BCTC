

module.exports = (sequelize, Sequelize) => {
    const MemberAccessibility = sequelize.define("memberAccessibility", {
        accessId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,           
            autoIncrement:true            
        },
        memberCode: {
            type: Sequelize.STRING(16),  // SILVER | GOLD | PLATINUM            
        },
        featureCode:Sequelize.STRING(128),
        featureName:Sequelize.STRING(256)
    },{
        timestamps: false,
        tableName:"memberAccessibility"
    })
    return MemberAccessibility;
}