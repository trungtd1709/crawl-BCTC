const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

/**
 * @type {Sequelize.Sequelize}
 */
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  timezone: "+07:00",
  logging: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.account = require("./account.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.courses = require("./course.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.courseLession = require("./lession.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.courseSection = require("./section.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.transaction = require("./transaction.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.webinars = require("./webinar.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Video = require("./video.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Book = require("./book.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Article = require("./article.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.categories = require("./category.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.webinarSession = require("./webinar-session.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.plan = require("./plan.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.banner = require("./banner.model.js")(sequelize, Sequelize);
db.notification = require("./notification.model.js")(sequelize, Sequelize);
db.bankAccount = require("./bank-account.model.js")(sequelize, Sequelize);
db.portfolio = require("./portfolio.model.js")(sequelize, Sequelize);
db.StockRealtime = require("./stockRealtime.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.StockHistory = require("./stockHistory.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.AccountLession = require("./account-lession.model.js")(sequelize, Sequelize);
db.FAQ = require("./faq.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.FeaturedReview = require("./featured-review.model.js")(sequelize, Sequelize);
db.Product = require("./product.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Event = require("./event.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Watchlist = require("./watchlist.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.WatchlistStock = require("./watchlist-stock.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Stock = require("./stock.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.WebinarAccount = require("./webinar-account.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.BoardOfManagement = require("./board-of-management.model.js")(
  sequelize,
  Sequelize
);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Position = require("./position.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.MajorHolder = require("./major-holder.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.LaborStructure = require("./labor-structure.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Associate = require("./associate.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Revenue = require("./revenue.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.ProcessOfIncreasingCharteredCapital =
  require("./process-of-increasing-chartered-capitals.model.js")(
    sequelize,
    Sequelize
  );
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.ArticleStock = require("./article-stock.model.js")(sequelize, Sequelize);
db.StockEvent = require("./stock-event.model.js")(sequelize, Sequelize);
db.Ownership = require("./ownership.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.MyList = require("./myList.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.MyListStock = require("./myList-stock.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Filter = require("./filter.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.FilterLine = require("./filter-line.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.FilterConditional = require("./filter-conditional.model.js")(
  sequelize,
  Sequelize
);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.ReportData = require("./report-data.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.ReportDataDetail = require("./reportDataDetail.model.js")(
  sequelize,
  Sequelize
);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.ReportNorm = require("./report-norm.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.ReportTerm = require("./report-term.model.js")(sequelize, Sequelize);
db.Sector = require("./sector.model.js")(sequelize, Sequelize);
db.SectorIndex = require("./sector-index.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Alert = require("./alert.model.js")(sequelize, Sequelize);
db.Warrant = require("./warrant.model.js")(sequelize, Sequelize);
// nghia
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Order = require("./order.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.OrderItem = require("./orderItem.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Voucher = require("./voucher.model.js")(sequelize, Sequelize);
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Address = require("./address.model.js")(sequelize, Sequelize);
db.Question = require("./questions.model.js")(sequelize);
/* sonnh: selling product = plan/book/course/webinar + price */
db.SellingProduct = require("./selling-product.model.js")(sequelize);
db.AccountResource = require("./account-resource.model.js")(sequelize);

db.FavouriteCourse = require("./favourite-course.model.js")(sequelize);

db.FavouriteArticle = require("./favourite-article.model.js")(sequelize);

db.FavouriteFilterLine = require("./favourite-filterLine.model.js")(sequelize);

// chien: dinh nghia cac association
db.categories.hasMany(db.Video, { foreignKey: "categoryId" });
db.Video.belongsTo(db.categories, { foreignKey: "categoryId" });
db.categories.hasMany(db.Article, { foreignKey: "categoryId" });
db.Article.belongsTo(db.categories, { foreignKey: "categoryId" });

db.webinarSession.belongsTo(db.webinars, { foreignKey: "webinarId" });
db.webinars.hasMany(db.webinarSession, {
  foreignKey: "webinarId",
  as: "session",
});
db.courses.hasMany(db.courseLession, { foreignKey: "courseId" });
db.courses.hasMany(db.courseSection, { foreignKey: "courseId" });
db.courseSection.hasMany(db.courseLession, { foreignKey: "sectionId" });
db.courseLession.belongsTo(db.courseSection, { foreignKey: "sectionId" });
db.AccountLession.belongsTo(db.account, { foreignKey: "accountId" });
db.AccountLession.belongsTo(db.courseLession, { foreignKey: "lessionId" });

db.transaction.belongsTo(db.account, { foreignKey: "accountId" });
db.account.hasMany(db.transaction, { foreignKey: "accountId" });
db.transaction.belongsTo(db.courses, { foreignKey: "courseId" });
db.transaction.belongsTo(db.webinars, { foreignKey: "webinarId" });
db.transaction.belongsTo(db.plan, { foreignKey: "planId" });
db.transaction.belongsTo(db.bankAccount, { foreignKey: "bankAccountId" });

db.notification.belongsTo(db.account, {
  foreignKey: "accountId",
  as: "account",
});

db.ideaList = require("./ideaList.model.js")(sequelize, Sequelize);
db.ideaList.belongsTo(db.Stock, { foreignKey: "stockCode", as: "stock" });
db.Filter.belongsTo(db.account, {
  foreignKey: "accountId",
});
db.Filter.hasMany(db.FilterLine, { foreignKey: "filterId" });
db.FilterLine.belongsTo(db.Filter, { foreignKey: "filterId" });
// db.FilterLine.belongsTo(db.FilterConditional, {
//   foreignKey: "filterConditionalId",
// });

db.MgIdentify = require("./mgIdentify.model.js")(sequelize, Sequelize);
// Hoang
/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Company = require("./company.model.js")(sequelize, Sequelize);
db.Industry = require("./industry.model.js")(sequelize, Sequelize);
db.Industry.hasMany(db.Company, { foreignKey: "industryId" });
db.Industry.belongsTo(db.Industry, { foreignKey: "parentId", as: "parent" });
db.Industry.hasMany(db.Industry, { foreignKey: "parentId", as: "children" });
db.Industry.hasMany(db.Stock, { foreignKey: "industryId" });
db.Stock.belongsTo(db.Industry, { foreignKey: "industryId", as: "industry" });
db.Stock.belongsTo(db.Industry, {
  foreignKey: "subIndustryId",
  as: "subIndustry",
});
db.Company.belongsTo(db.Industry, { foreignKey: "industryId" });
db.Company.belongsTo(db.Industry, {
  foreignKey: "subIndustryId",
  as: "subIndustry",
});
db.Company.belongsTo(db.Stock, { foreignKey: "stockCode", as: "stock" });

db.Watchlist.belongsTo(db.account, { foreignKey: "accountId" });
db.Watchlist.hasMany(db.WatchlistStock, { foreignKey: "watchlistId" });
db.WatchlistStock.belongsTo(db.Watchlist, { foreignKey: "watchlistId" });
db.WatchlistStock.belongsTo(db.Stock, { foreignKey: "stockCode" });
db.WebinarAccount.belongsTo(db.account, { foreignKey: "accountId" });
db.WebinarAccount.belongsTo(db.webinars, { foreignKey: "webinarId" });
db.account.belongsToMany(db.webinars, {
  foreignKey: "accountId",
  through: db.WebinarAccount,
  as: "webinars",
});
db.webinars.belongsToMany(db.account, {
  foreignKey: "webinarId",
  through: db.WebinarAccount,
  as: "attenders",
});
db.BoardOfManagement.belongsTo(db.Company, { foreignKey: "companyId" });
db.Associate.belongsTo(db.Company, { foreignKey: "companyId" });
db.LaborStructure.belongsTo(db.Company, { foreignKey: "companyId" });
db.MajorHolder.belongsTo(db.Company, { foreignKey: "companyId" });
db.Revenue.belongsTo(db.Company, { foreignKey: "companyId" });
db.ProcessOfIncreasingCharteredCapital.belongsTo(db.Company, {
  foreignKey: "companyId",
});
db.ArticleStock.belongsTo(db.Stock, { foreignKey: "stockCode" });
db.ArticleStock.belongsTo(db.Article, { foreignKey: "articleId" });
db.Stock.belongsToMany(db.Article, {
  through: db.ArticleStock,
  foreignKey: "stockCode",
  as: "articles",
});
db.Article.belongsToMany(db.Stock, {
  through: db.ArticleStock,
  foreignKey: "articleId",
  as: "stocks",
});
db.StockEvent.belongsTo(db.Stock, { foreignKey: "stockCode" });
db.Ownership.belongsTo(db.Company, { foreignKey: "companyId" });

db.MyList.belongsTo(db.account, { foreignKey: "accountId" });
db.MyListStock.belongsTo(db.Stock, { foreignKey: "stockCode" });
db.MyList.hasMany(db.MyListStock, { foreignKey: "myListId" });
db.MyListStock.belongsTo(db.MyList, { foreignKey: "myListId" });
db.ReportData.belongsTo(db.Stock, { foreignKey: "stockCode" });
db.Stock.hasMany(db.ReportData, { foreignKey: "stockCode" });
db.ReportData.belongsTo(db.ReportTerm, { foreignKey: "reportTermId" });
db.ReportData.hasMany(db.ReportDataDetail, { foreignKey: "reportDataId" });
db.ReportDataDetail.belongsTo(db.ReportData, { foreignKey: "reportDataId" });
db.ReportDataDetail.belongsTo(db.ReportNorm, { foreignKey: "reportNormId" });
db.ReportData.belongsTo(db.Company, {
  as: "company",
  targetKey: "stockCode",
  foreignKey: "stockCode",
});

db.SectorIndex.belongsTo(db.Sector, { foreignKey: "sectorId" });
db.Alert.belongsTo(db.account, { foreignKey: "accountId" });
db.Alert.belongsTo(db.Stock, { foreignKey: "stockCode" });
db.Warrant.belongsTo(db.Stock, { foreignKey: "stockCode" });

// Account subscription
db.AccountSubscriptionToken = require("./accountSubscriptionToken.model.js")(
  sequelize,
  Sequelize
);
db.AccountSubscriptionToken.belongsTo(db.account, { foreignKey: "accountId" });

// finace index
db.FinanceIndex = require("./financeIndex.model.js")(sequelize, Sequelize);
db.FinanceIndexData = require("./financeIndexData.model.js")(
  sequelize,
  Sequelize
);
db.FinanceIndexData.belongsTo(db.FinanceIndex, {
  foreignKey: "financeIndexId",
});
db.FinanceIndexData.belongsTo(db.ReportTerm, { foreignKey: "reportTermId" });
db.FinanceIndexData.belongsTo(db.Company, { foreignKey: "companyId" });

// email sent
db.EmailSent = require("./emailSent.model.js")(sequelize, Sequelize);
db.EmailSent.belongsTo(db.account, { foreignKey: "accountId" });

// stockSplit (phân tách cổ phiếu)
/**
 * stockSplit (phân tách cổ phiếu)
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.StockSplit = require("./stockSplit.model.js")(sequelize, Sequelize);

/**
 * Chỉ số tài chính ngành. công thức sheet "ước tính tác động ngành"
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.IndustryHistory = require("./industryHistory.model.js")(sequelize);

/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.Config = require("./config.model.js")(sequelize, Sequelize);

db.StockFinancialIndex = require("./stock-financial-index.model.js")(sequelize);

db.Payment = require("./payment.model.js")(sequelize, Sequelize);

db.IndustryFinancialIndex = require("./industry-financial-index.model.js")(
  sequelize
);

db.Cache = require("./cache.model.js")(sequelize);

db.Payment.belongsTo(db.courses, { foreignKey: "courseId" });
db.Payment.belongsTo(db.webinars, { foreignKey: "webinarId" });
db.Payment.belongsTo(db.plan, { foreignKey: "planId" });

db.FeatureCode = require("./feature.model.js")(sequelize, Sequelize);

/**
 * @type {Sequelize.ModelStatic<Sequelize.Model>}
 */
db.MemberAccessibility = require("./memberAccessibility.model.js")(
  sequelize,
  Sequelize
);

db.MemberAccessibility.belongsTo(db.FeatureCode, { foreignKey: "featureCode" });

db.Lecturer = require("./lecturer.model.js")(sequelize, Sequelize);
db.courses.hasOne(db.Lecturer, {
  sourceKey: "lecturerId",
  foreignKey: "lecturerId",
  as: "lecturer",
});

db.Order.hasMany(db.OrderItem, { foreignKey: "orderId" });
db.OrderItem.belongsTo(db.Order, { foreignKey: "orderId" });
db.Order.belongsTo(db.account, { foreignKey: "accountId" });

db.webinars.hasMany(db.SellingProduct, { foreignKey: "webinarId" });
db.courses.hasMany(db.SellingProduct, { foreignKey: "courseId" });
db.plan.hasMany(db.SellingProduct, { foreignKey: "planId" });
db.Book.hasMany(db.SellingProduct, { foreignKey: "bookId" });
db.SellingProduct.belongsTo(db.webinars, { foreignKey: "webinarId" });
db.SellingProduct.belongsTo(db.courses, { foreignKey: "courseId" });
db.SellingProduct.belongsTo(db.plan, { foreignKey: "planId" });
db.SellingProduct.belongsTo(db.Book, { foreignKey: "bookId" });

db.AccountResource.belongsTo(db.webinars, { foreignKey: "webinarId" });
db.AccountResource.belongsTo(db.courses, { foreignKey: "courseId" });
db.AccountResource.belongsTo(db.plan, { foreignKey: "planId" });
db.AccountResource.belongsTo(db.Book, { foreignKey: "bookId" });
db.AccountResource.belongsTo(db.account, { foreignKey: "accountId" });
db.account.hasMany(db.AccountResource, { foreignKey: "accountId" });

db.FavouriteCourse.belongsTo(db.account, { foreignKey: "accountId" });
db.FavouriteCourse.belongsTo(db.courses, { foreignKey: "courseId" });
db.account.hasMany(db.FavouriteCourse, { foreignKey: "accountId" });

db.FavouriteArticle.belongsTo(db.account, { foreignKey: "accountId" });
db.FavouriteArticle.belongsTo(db.Article, { foreignKey: "articleId" });
db.account.hasMany(db.FavouriteArticle, { foreignKey: "accountId" });

db.FavouriteFilterLine.belongsTo(db.account, { foreignKey: "accountId" });
db.account.hasMany(db.FavouriteFilterLine, { foreignKey: "accountId" });

db.OflineDate = require("./offlineDate.model.js")(sequelize, Sequelize);

module.exports = db;
