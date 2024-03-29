
module.exports = (sequelize, Sequelize) => {
    const FeaturedReview = sequelize.define("featuredReviews", {
        featuredReviewId: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(256)
        },
        avatar: {
            type: Sequelize.STRING(512)
        },
        job: {
            type: Sequelize.STRING(256)
        },
        reviewText: {
            type: Sequelize.TEXT
        },
        onTop: {
            type: Sequelize.INTEGER
        },
    })
    return FeaturedReview;
}