const { NODE_ENV } = require('./env');

module.exports.ACCOUNT_LOGIN = '/api/v1/account/login';
module.exports.ACCOUNT_REGISTER = '/api/v1/account/register';

module.exports.ACCESS_LEVEL_ADMIN = 0; // Quản trị
module.exports.ACCESS_LEVEL_PREMIUM = 1; // Là thành viên trả phí
module.exports.ACCESS_LEVEL_USER = 2; // Đã đăng nhập
module.exports.ACCESS_LEVEL_FREE = 3; // Chưa đăng nhập
module.exports.ACCESS_LEVEL_ALL = 4; // all
module.exports.UPLOAD_EXTENSIONS = [
  'jpeg',
  'jpg',
  'png',
  'pdf',
  'doc',
  'docx',
  'mp3',
  'mov',
  'mp4',
  'avi',
  'webp',
];

//chien
const PATH_API_VERSION = '/api/v1';
//video
module.exports.PATH_VIDEO_CREATE = `${PATH_API_VERSION}/knowledge/video/create`;
module.exports.PATH_VIDEO_DELETE = `${PATH_API_VERSION}/knowledge/video/delete`;
module.exports.PATH_VIDEO_EDIT = `${PATH_API_VERSION}/knowledge/video/edit`;
module.exports.PATH_VIDEO_SEARCH = `${PATH_API_VERSION}/knowledge/video/search`;
module.exports.PATH_VIDEO_SHOW = `${PATH_API_VERSION}/knowledge/video/show`;
module.exports.PATH_VIDEO_FIND = `${PATH_API_VERSION}/knowledge/video/find`;
module.exports.PATH_VIDEO_GET_RELATED = `${PATH_API_VERSION}/knowledge/video/get_related`;
module.exports.PATH_VIDEO_SYNC_YOUTUBE = `${PATH_API_VERSION}/knowledge/video/sync-youtube`;
module.exports.PATH_VIDEO_GET_YOUTUBE = `${PATH_API_VERSION}/knowledge/video/youtube`;

//book
module.exports.PATH_BOOK_CREATE = `${PATH_API_VERSION}/knowledge/book/create`;
module.exports.PATH_BOOK_EDIT = `${PATH_API_VERSION}/knowledge/book/edit`;
module.exports.PATH_BOOK_DELETE = `${PATH_API_VERSION}/knowledge/book/delete`;
module.exports.PATH_BOOK_SHOW = `${PATH_API_VERSION}/knowledge/book/show`;
module.exports.PATH_BOOK_FIND = `${PATH_API_VERSION}/knowledge/book/find`;
// quybka
module.exports.PATH_BOOK_DETAIL = `${PATH_API_VERSION}/knowledge/book/detail`;

//academy
module.exports.PATH_ACADEMY_EDIT = `${PATH_API_VERSION}/knowledge/academy/edit`;
module.exports.PATH_ACADEMY_SHOW = `${PATH_API_VERSION}/knowledge/academy/show`;
module.exports.PATH_ACADEMY_SHOW_VIDEO = `${PATH_API_VERSION}/knowledge/academy/show_video`;
module.exports.PATH_ACADEMY_SHOW_ARTICLE = `${PATH_API_VERSION}/knowledge/academy/show_article`;

//article
module.exports.PATH_ARTICLE_CREATE = `${PATH_API_VERSION}/knowledge/article/create`;
module.exports.PATH_ARTICLE_EDIT = `${PATH_API_VERSION}/knowledge/article/edit`;
module.exports.PATH_ARTICLE_DELETE = `${PATH_API_VERSION}/knowledge/article/delete`;
module.exports.PATH_ARTICLE_SHOW = `${PATH_API_VERSION}/knowledge/article/show`;
module.exports.PATH_ARTICLE_FIND = `${PATH_API_VERSION}/knowledge/article/find`;
module.exports.PATH_ARTICLE_RELATED = `${PATH_API_VERSION}/knowledge/article/get_related`;
module.exports.PATH_ARTICLE_GET = `${PATH_API_VERSION}/knowledge/article`;
module.exports.PATH_ARTICLE_PREVIEW = `${PATH_API_VERSION}/knowledge/article/preview`;

//transactions
module.exports.PATH_TRANSACTION_SHOW = `${PATH_API_VERSION}/transaction/all`;
module.exports.PATH_TRANSACTION_DELETE = `${PATH_API_VERSION}/transaction/delete`;
module.exports.PATH_TRANSACTION_CONFIRM = `${PATH_API_VERSION}/transaction/confirm`;
//webinars
module.exports.PATH_WEBINAR_FIND = `${PATH_API_VERSION}/webinar`;
module.exports.PATH_WEBINAR_CREATE = `${PATH_API_VERSION}/webinar/create`;
module.exports.PATH_WEBINAR_DELETE = `${PATH_API_VERSION}/webinar/delete`;

//category
module.exports.PATH_CATEGORY_CREATE = `${PATH_API_VERSION}/category/create`;
module.exports.PATH_CATEGORY_DELETE = `${PATH_API_VERSION}/category/delete`;

//webinar-session
module.exports.PATH_WEBINAR_SESSION_SHOW = `${PATH_API_VERSION}/webinar_session/all`;
module.exports.PATH_WEBINAR_SESSION_CREATE = `${PATH_API_VERSION}/webinar_session/create`;
module.exports.PATH_WEBINAR_SESSION_DELETE = `${PATH_API_VERSION}/webinar_session/delete`;

//plan
module.exports.PATH_PLAN = `${PATH_API_VERSION}/plan`;
module.exports.PATH_PLAN_CREATE = `${PATH_API_VERSION}/plan/create`;
module.exports.PATH_PLAN_DELETE = `${PATH_API_VERSION}/plan/delete`;

//banner
module.exports.PATH_BANNER_CREATE = `${PATH_API_VERSION}/banner/create`;
module.exports.PATH_BANNER_DELETE = `${PATH_API_VERSION}/banner/delete`;
module.exports.PATH_BANNER_SHOW = `${PATH_API_VERSION}/banner/all`;

//bankAccount
module.exports.PATH_BANK_ACCOUNT_CREATE = `${PATH_API_VERSION}/bankAccount/create`;
module.exports.PATH_BANK_ACCOUNT_DELETE = `${PATH_API_VERSION}/bankAccount/delete`;

//realtime
module.exports.PATH_REALTIME = `${PATH_API_VERSION}/realtime`;

//history
module.exports.PATH_HISTORY = `${PATH_API_VERSION}/history`;

//course

module.exports.PATH_COURSE = `${PATH_API_VERSION}/course/get_courses`;
module.exports.PATH_COURSE_DETAIL = `${PATH_API_VERSION}/course/detail`;
module.exports.PATH_COURSE_CREATE = `${PATH_API_VERSION}/course/create_course`;
module.exports.PATH_COURSE_DELETE = `${PATH_API_VERSION}/course/delete_course`;
module.exports.PATH_COURSE_UPDATE = `${PATH_API_VERSION}/course/update_course`;
module.exports.PATH_COURSE_PREVIEW = `${PATH_API_VERSION}/course/preview`;

module.exports.PATH_LESSION_CREATE = `${PATH_API_VERSION}/course/create_lession`;
module.exports.PATH_LESSION_UPDATE = `${PATH_API_VERSION}/course/update_lession`;
module.exports.PATH_LESSION_DELETE = `${PATH_API_VERSION}/course/delete_lession`;

//faq
module.exports.PATH_FAQ_CREATE = `${PATH_API_VERSION}/faq/create`;
module.exports.PATH_FAQ_DELETE = `${PATH_API_VERSION}/faq/delete`;
module.exports.PATH_FAQ_SHOW = `${PATH_API_VERSION}/faq/`;

//FeaturedReview

module.exports.PATH_FEATURED_REVIEW = `${PATH_API_VERSION}/featured_review`;
module.exports.PATH_FEATURED_REVIEW_CREATE = `${PATH_API_VERSION}/featured_review/create`;
module.exports.PATH_FEATURED_REVIEW_DELETE = `${PATH_API_VERSION}/featured_review/delete`;

//global
module.exports.PATH_COMMON_INFO = `${PATH_API_VERSION}/global`;

//PRODUCT

module.exports.PATH_PRODUCT = `${PATH_API_VERSION}/product/`;
module.exports.PATH_PRODUCT_CREATE = `${PATH_API_VERSION}/product/create`;
module.exports.PATH_PRODUCT_DELETE = `${PATH_API_VERSION}/product/delete`;

//EVENT
module.exports.PATH_EVENT = `${PATH_API_VERSION}/event/`;
module.exports.PATH_EVENT_CREATE = `${PATH_API_VERSION}/event/create`;
module.exports.PATH_EVENT_DELETE = `${PATH_API_VERSION}/event/delete`;

//COMPANY
module.exports.PATH_COMPANY = `${PATH_API_VERSION}/company`;
module.exports.PATH_SIMILAR_COMPANY = `${PATH_API_VERSION}/company/similar`;
module.exports.PATH_COMPANY_REPORT_DATA = `${PATH_API_VERSION}/company/report/`;

//ideaList
module.exports.PATH_GET_IDEA_LIST = `${PATH_API_VERSION}/ideaList/all`;
module.exports.PATH_IDEA_LIST_DETAIL = `${PATH_API_VERSION}/ideaList/detail`;
module.exports.PATH_CREATE_IDEA_LIST = `${PATH_API_VERSION}/ideaList/create`;
module.exports.PATH_DELETE_IDEA_LIST = `${PATH_API_VERSION}/ideaList/delete`;
module.exports.PATH_DELETE_MANY_IDEA_LIST = `${PATH_API_VERSION}/ideaList/createMany`;

//mgFilter
module.exports.PATH_GET_MG_IDENTIFY = `${PATH_API_VERSION}/mgIdentify/find`;
module.exports.PATH_GET_MG_IDENTIFY_DETAIL = `${PATH_API_VERSION}/mgIdentify/detail`;

//stock
module.exports.PATH_FIND_STOCK = `${PATH_API_VERSION}/stock/all`;
module.exports.PATH_STOCK_DETAIL = `${PATH_API_VERSION}/stock/detail`;
module.exports.PATH_STOCK_WARRANT = `${PATH_API_VERSION}/stock/warrant`;
module.exports.PATH_STOCK_HIEUSUAT = `${PATH_API_VERSION}/stock/hieusuatcophieu`;
module.exports.PATH_STOCK_HIEUSUATCHISO = `${PATH_API_VERSION}/stock/hieusuatchiso`;
module.exports.PATH_STOCK_TOPCHISO = `${PATH_API_VERSION}/stock/topchiso`;
module.exports.PATH_STOCK_CHISOTAICHINH = `${PATH_API_VERSION}/stock/chisotaichinh`;
module.exports.PATH_STOCK_GET_ALL = `${PATH_API_VERSION}/stock/get-all`;
module.exports.PATH_STOCK_PE_HISTORY = `${PATH_API_VERSION}/stock/pe-history`;
module.exports.PATH_STOCK_EPS_HISTORY = `${PATH_API_VERSION}/stock/eps-history`;
module.exports.PATH_STOCK_RS_HISTORY = `${PATH_API_VERSION}/stock/rs-history`;

//sector
module.exports.PATH_GET_SECTOR = `${PATH_API_VERSION}/sector/all`;

//industry
module.exports.PATH_GET_INDUSTRY_POINT = `${PATH_API_VERSION}/industry/point`;
module.exports.PATH_GET_INDUSTRY_IMPACT = `${PATH_API_VERSION}/industry/impact`;
module.exports.PATH_GET_INDUSTRY_REALTIME = `${PATH_API_VERSION}/industry/realtime`;
module.exports.PATH_GET_INDUSTRY_HIEUSUAT = `${PATH_API_VERSION}/industry/hieusuatnganh`;

//notification
module.exports.PATH_GET_PUBLIC_KEY = `${PATH_API_VERSION}/notification/getPublicKey`;
module.exports.PATH_REGISTER_TOKEN = `${PATH_API_VERSION}/notification/registerToken`;

//PE,PB... industry index
module.exports.PATH_GET_SPECIAL_INDUSTRY_INDEX = `${PATH_API_VERSION}/industry/special`;
/* industry value, price */
module.exports.PATH_GET_INDUSTRY_INDEX = `${PATH_API_VERSION}/industry/index`;

//reset password
module.exports.PATH_REQUEST_RESET_PASSWORD = `${PATH_API_VERSION}/account/requestResetPassword`;
module.exports.PATH_RESET_PASSWORD = `${PATH_API_VERSION}/account/resetPassword`;

//activate account
module.exports.PATH_ACTIVATE_ACCOUNT = `${PATH_API_VERSION}/account/activate`;
module.exports.PATH_REQUEST_ACTIVATION_EMAIL = `${PATH_API_VERSION}/account/request-activation-email`;

//report data
module.exports.PATH_REPORT_DATA = `${PATH_API_VERSION}/reportData`;

// lecturer
module.exports.PATH_LECTURER = `${PATH_API_VERSION}/lecturer`;

// permission
module.exports.PATH_PERMISSION = `${PATH_API_VERSION}/permission`;

// address
module.exports.PATH_ADDRESS = `${PATH_API_VERSION}/address`;

// config
module.exports.PATH_CONFIG_FIND = `${PATH_API_VERSION}/config/find`;

// question
module.exports.PATH_QUESTION_CREATE = `${PATH_API_VERSION}/question/create`;
module.exports.PATH_QUESTION_UPDATE = `${PATH_API_VERSION}/question/update`;
module.exports.PATH_QUESTION_DELETE = `${PATH_API_VERSION}/question/delete`;

//selling product
module.exports.PATH_SELLING_PRODUCT_DETAIL = `${PATH_API_VERSION}/selling-product/detail`;
module.exports.PATH_SELLING_PRODUCT_FIND = `${PATH_API_VERSION}/selling-product/find`;

/* test */
module.exports.PATH_TEST = `${PATH_API_VERSION}/test`;
// 0: =
// 1: >
// 2: <
// 3:  >=
// 4: <=
module.exports.LIST_COMPARE_CODE = [0, 1, 2, 3, 4];
/**
 * 1: Gia 2: KL 3: Thu nhap 4: Thay doi
 */
module.exports.LIST_ALERT_TYPE = [1, 2, 3, 4];

/* Report template */
module.exports.REPORT_DATA_TEMPLATE = {
  'Kết quả kinh doanh': [
    // 2206, 2218, 2216, 2207, 2217, 2221, 2222, 2223, 5321, 2227, 2224, 2208,
    // 2225, 2226, 2209, 2210, 2211, 2219, 2220, 2212, 2213, 2214, 2215, 5316,

    346, 350, 184, 185, 186, 189, 190, 195, 197, 497, 557, 580, 581, 583, 584,
    773, 585, 189, 587, 195, 197, 198,
  ],
  'Cân đối kế toán': [
    // 2995,
    // 3000,
    // 3003,
    // 3018,
    // 3019,
    // 3004,
    // 3020,
    // 3021,
    // 5297,
    // 3005,
    // 3022,
    // 3023,
    // 3024,
    // 3025,
    // 5300,
    // 3026,
    // 3079,
    // 5299,
    // 3006,
    // 3027,
    // 3080,
    // 3007,
    // 3028,
    // 3029,
    // 3030,
    // 5270,
    // 3031,
    // 3001,
    // 3008,
    // 3032,
    // 5301,
    // 3033,
    // 3034,
    // 5302,
    // 3081,
    // 3082,
    // 3009, //"II. Tài sản cố định"
    // 3035, //"1. Tài sản cố định hữu hình"
    // 3036, //"2. Tài sản cố định thuê tài chính"
    // 3037, //"3. Tài sản cố định vô hình"
    // 3010, //"III. Bất động sản đầu tư"
    // 5298, //"IV. Tài sản dở dang dài hạn"
    // 5303, //"1. Chi phí sản xuất, kinh doanh dở dang dài hạn"
    // 3038, //"2. Chi phí xây dựng cơ bản dở dang"
    // 3011, //"V. Đầu tư tài chính dài hạn"
    // 3041, //"1. Đầu tư vào công ty con"
    // 3042, //"2. Đầu tư vào công ty liên kết, liên doanh"
    // 5304, //"3. Đầu tư góp vốn vào đơn vị khác"
    // 3044, //"4. Dự phòng đầu tư tài chính dài hạn"
    // 5312, //"5. Đầu tư nắm giữ đến ngày đáo hạn"
    // 3043, //"6. Đầu tư dài hạn khác"
    // 3013, //"VI. Tài sản dài hạn khác"
    // 3045, //"1. Chi phí trả trước dài hạn"
    // 3046, //"2. Tài sản thuế thu nhập hoãn lại"
    // 5305, //"3. Thiết bị, vật tư, phụ tùng thay thế dài hạn"
    // 3047, //"4. Tài sản dài hạn khác"
    // 3012, //"VII. Lợi thế thương mại"
    // 2996, //"TỔNG CỘNG TÀI SẢN"
    // 2994, //"NGUỒN VỐN"
    // 2997, //"A. NỢ PHẢI TRẢ"
    // 3014, //"I. Nợ ngắn hạn"
    // 3048, //"1. Phải trả người bán ngắn hạn"
    // 3049, //"2. Người mua trả tiền trước ngắn hạn"
    // 3050, //"3. Thuế và các khoản phải nộp Nhà nước"
    // 3051, //"4. Phải trả người lao động"
    // 3052, //"5. Chi phí phải trả ngắn hạn"
    // 3053, //"6. Phải trả nội bộ ngắn hạn"
    // 3054, //"7. Phải trả theo tiến độ kế hoạch hợp đồng xây dựng"
    // 4804, //"8. Doanh thu chưa thực hiện ngắn hạn"
    // 3055, //"9. Phải trả ngắn hạn khác"
    // 3077, //"10. Vay và nợ thuê tài chính ngắn hạn"
    // 3056, //"11. Dự phòng phải trả ngắn hạn"
    // 3074, //"12. Quỹ khen thưởng phúc lợi"
    // 5306, //"13. Quỹ bình ổn giá"
    // 5269, //"14. Giao dịch mua bán lại trái phiếu chính phủ"
    // 3017, //"II. Nợ dài hạn "
    // 3057, //"1. Phải trả người bán dài hạn"
    // 5307, //"2. Người mua trả tiền trước dài hạn"
    // 5308, //"3. Chi phí phải trả dài hạn"
    // 5309, //"4. Phải trả nội bộ về vốn kinh doanh"
    // 3058, //"5. Phải trả nội bộ dài hạn
    // 4066, //"6. Doanh thu chưa thực hiện dài hạn"
    // 3059, //"7. Phải trả dài hạn khác"
    // 3078, //"8. Vay và nợ thuê tài chính dài hạn"
    // 5310, //"9. Trái phiếu chuyển đổi"
    // 5319, //"10. Cổ phiếu ưu đãi (Nợ)"
    // 3060, //"11. Thuế thu nhập hoãn lại phải trả"
    // 3062, //"12. Dự phòng phải trả dài hạn"
    // 4067, //"13. Quỹ phát triển khoa học và công nghệ"
    // 3061,
    // 2998, //"B. VỐN CHỦ SỞ HỮU"
    // 3015, //"I. Vốn chủ sở hữu"
    // 3063, //"1. Vốn góp của chủ sở hữu"
    // 3064, //"2. Thặng dư vốn cổ phần"
    // 5311, //"3. Quyền chọn chuyển đổi trái phiếu"
    // 3065, //"4. Vốn khác của chủ sở hữu"
    // 3066, //"5. Cổ phiếu quỹ (*)"
    // 3067, //"6. Chênh lệch đánh giá lại tài sản"
    // 3068, //"7. Chênh lệch tỷ giá hối đoái"
    // 3069, //"8. Quỹ đầu tư phát triển"
    // 4073, //"9. Quỹ hỗ trợ sắp xếp doanh nghiệp"
    // 3071, //"10. Quỹ khác thuộc vốn chủ sở hữu"
    // 3072, //"11. Lợi nhuận sau thuế chưa phân phối"
    // 3073, //"12. Nguồn vốn đầu tư XDCB"
    // 5320, //"13. Lợi ích cổ đông không kiểm soát"
    // 3070, //"14. Quỹ dự phòng tài chính"
    // 3016, //"II. Nguồn kinh phí và quỹ khác"
    // 3075, //"1. Nguồn kinh phí"
    // 3076, //"2. Nguồn kinh phí đã hình thành TSCĐ"
    // 3002, //"C. LỢI ÍCH CỦA CỔ ĐÔNG THIỂU SỐ"
    // 2999, //"TỔNG CỘNG NGUỒN VỐN"

    145, 438, 98, 99, 101, 104, 979, 991, 954, 992, 993, 441, 147, 148, 307,
    447, 446, 448, 164, 175, 145, 525, 526, 527, 530, 533, 534, 537, 541, 121,
    607, 547, 561, 549, 550, 553, 555, 556, 557, 562, 563, 566, 328,
  ],
  // "Lưu chuyển tiền tệ": [
  //   2228, //"I. Lưu chuyển tiền từ hoạt động kinh doanh"
  //   2232, //"1. Lợi nhuận trước thuế"
  //   2229, //"2. Điều chỉnh cho các khoản"
  //   2242, //"Khấu hao TSCĐ và BĐSĐT"
  //   2243, //"Các khoản dự phòng"
  //   2244, //"Lãi, lỗ chênh lệch tỷ giá hối đoái do đánh giá lại các khoản mục tiền tệ có gốc ngoại tệchưa thực hiện"
  //   2245, //"Lãi, lỗ từ hoạt động đầu tư"
  //   2241, //"Chi phí lãi vay"
  //   5271, //"Lãi, lỗ do thanh lý TSCĐ"
  //   5272, //"Thu nhập lãi vay và cổ tức"
  //   5273, //"Phân bổ lợi thế thương mại"
  //   5274, //"Điều chỉnh cho các khoản khác"
  //   2233, //"3. Lợi nhuận từ hoạt động kinh doanh trước thay đổi vốn lưu động"
  //   2246, //"Tăng, giảm các khoản phải thu"
  //   2247, //"Tăng, giảm hàng tồn kho"
  //   2248, //"Tăng, giảm các khoản phải trả (không kể lãi vay phải trả, thuế thu nhập phải nộp)"
  //   2249, //"Tăng, giảm chi phí trả trước"
  //   5317, //"Tăng, giảm chứng khoán kinh doanh"
  //   2250, //"Tiền lãi vay đã trả"
  //   2251, //"Thuế thu nhập doanh nghiệp đã nộp"
  //   2252, //"Tiền thu khác từ hoạt động kinh doanh"
  //   2253, //"Tiền chi khác từ hoạt động kinh doanh"
  //   2234, //"Lưu chuyển tiền thuần từ hoạt động kinh doanh"
  //   2230, //"II. Lưu chuyển tiền từ hoạt động đầu tư"
  //   2254, //"1. Tiền chi để mua sắm, xây dựng TSCĐ và các tài sản dài hạn khác"
  //   2255, //"2. Tiền thu từ thanh lý, nhượng bán TSCĐ và các tài sản dài hạn khác"
  //   2256, //"3. Tiền chi cho vay, mua các công cụ nợ của đơn vị khác"
  //   2257, //"4. Tiền thu hồi cho vay, bán lại các công cụ nợ của đơn vị khác"
  //   2258, //"5. Tiền chi đầu tư góp vốn vào đơn vị khác"
  //   2259, //"6. Tiền thu hồi đầu tư góp vốn vào đơn vị khác"
  //   2260, //"7. Tiền thu lãi cho vay, cổ tức và lợi nhuận được chia"
  //   5275, //"8. Tăng giảm tiền gửi ngân hàng có kỳ hạn"
  //   4068, //"9. Mua lại khoản góp vốn của cổ đông thiểu số trong công ty con"
  //   5276, //"10. Tiền thu khác từ hoạt động đầu tư"
  //   5277, //"11. Tiền chi khác cho hoat động đầu tư"
  //   2235, //"Lưu chuyển tiền thuần từ hoạt động đầu tư"
  //   2231, //"III. Lưu chuyển tiền từ hoạt động tài chính"
  //   2261, //"1. Tiền thu từ phát hành cổ phiếu, nhận vốn góp của chủ sở hữu"
  //   2262, //"2. Tiền chi trả vốn góp cho các chủ sở hữu, mua lại cổ phiếu của doanh nghiệp đã phát hành"
  //   2263, //"3. Tiền thu từ đi vay"
  //   2264, //"4. Tiền chi trả nợ gốc vay"
  //   2265, //"5. Tiền trả nợ gốc thuê tài chính"
  //   2266, //"6. Cổ tức, lợi nhuận đã trả cho chủ sở hữu "
  //   5278, //"7. Tiền thu khác từ hoạt động tài chính"
  //   5279, //"8. Tiền chi khác cho hoạt động tài chính"
  //   2267, //"I. Lưu chuyển tiền từ hoạt động kinh doanh"
  //   2291, //"1. Tiền thu từ bán hàng, cung cấp dịch vụ và doanh thu khác"
  //   2292, //"2. Tiền chi trả cho người cung cấp hàng hoá và dịch vụ
  //   2293, //"3. Tiền chi trả cho người lao động"
  //   2294, //"4. Tiền chi trả lãi vay"
  //   2295, //"5. Tiền chi nộp thuế thu nhập doanh nghiệp"
  //   2277, //"6. Tiền thu khác từ hoạt động kinh doanh"
  //   2296, //"7. Tiền chi khác cho hoạt động kinh doanh"
  //   2268, //"II. Lưu chuyển tiền từ hoạt động đầu tư"
  //   2278, //"1. Tiền chi để mua sắm, xây dựng TSCĐ và các tài sản dài hạn khác"
  //   2279, //"2. Tiền thu từ thanh lý, nhượng bán TSCĐ và các tài sản dài hạn khác"
  //   2280, //"3. Tiền chi cho vay, mua các công cụ nợ của đơn vị khác"
  //   2281, //"4. Tiền thu hồi cho vay, bán lại các công cụ nợ của đơn vị khác"
  //   2282, //"5. Tiền chi đầu tư góp vốn vào đơn vị khác"
  //   2283, //"6. Tiền thu hồi đầu tư góp vốn vào đơn vị khác"
  //   2284, //"7. Tiền thu lãi cho vay, cổ tức và lợi nhuận được chia"
  //   5280, //"8. Tiền thu khác từ hoạt động đầu tư"
  //   5281, //"9. Tiền chi khác cho hoat động đầu tư"
  //   2271, //"Lưu chuyển tiền thuần từ hoạt động đầu tư"
  //   2269, //"III. Lưu chuyển tiền từ hoạt động tài chính"
  //   2285, //"1. Tiền thu từ phát hành cổ phiếu, nhận vốn góp của chủ sở hữu"
  //   2286, //"2. Tiền chi trả vốn góp cho các chủ sở hữu, mua lại cổ phiếu của doanh nghiệp đã phát hành"
  //   2287, //"3. Tiền thu từ đi vay"
  //   2288, //"4. Tiền chi trả nợ gốc vay
  //   2289, //"5. Tiền trả nợ gốc thuê tài chính"
  //   2290, //"6. Cổ tức, lợi nhuận đã trả cho chủ sở hữu"
  //   5282, //"7. Tiền thu khác từ hoạt động tài chính
  //   5283, //"8. Tiền chi khác cho hoạt động tài chính"
  //   2272, //"Lưu chuyển tiền thuần từ hoạt động tài chính"
  //   2274, //"Lưu chuyển tiền thuần trong kỳ (50=20+30+40)"
  //   2275, //"Tiền và tương đương tiền đầu kỳ"
  //   2273, //"Ảnh hưởng của thay đổi tỷ giá hối đoái quy đổi ngoại tệ"
  //   2276, //"Tiền và tương đương tiền cuối kỳ (70 = 50+60+61)"
  // ],
};
module.exports.REPORT_DATA_TEMPLATE_ALTERNATIVE = {
  'Kết quả kinh doanh': [
    4399, 4396, 4385, 4397, 4398, 4386, 4387, 4388, 4389, 4394, 4395, 4390,
    4393, 4391, 4376, 4392, 4377, 4383, 4384, 4382, 4378, 4379, 4380, 4381,
  ],
  'Cân đối kế toán': [
    4302, 4310, 4311, 4312, 4344, 4326, 4345, 4313, 4346, 4347, 4314, 4315,
    4348, 4349, 5322, 5323, 5324, 4316, 4350, 4351, 4352, 4317, 4333, 4354,
    4334, 4355, 4307, 4328, 4367, 4368, 4329, 4369, 4370, 4330, 4371, 4372,
    4308, 4331, 4332, 4327, 4356, 4357, 4335, 4366, 4309, 4358, 4375, 4303,
    4318, 4319, 4359, 4360, 4320, 4321, 4322, 4323, 4324, 4361, 4336, 4362,
    4363, 4304, 4325, 4364, 4337, 4373, 4338, 4340, 4374, 4339, 4365, 4342,
    4341, 4343, 5699, 4306, 4305,
  ],
  'Lưu chuyển tiền tệ': [
    4155, 4162, 4156, 4195, 4196, 4197, 4198, 4199, 4200, 4201, 4202, 4203,
    4161, 4159, 4174, 4175, 4204, 4176, 4205, 4206, 4177, 4160, 4178, 4179,
    4180, 4182, 4181, 4207, 4208, 4183, 4169, 4171, 4184, 4163, 4157, 4172,
    4173, 4185, 4186, 4187, 4188, 4209, 4210, 4189, 4164, 4158, 4190, 4191,
    4192, 4211, 4193, 4194, 4165, 4166, 4167, 4170, 4168, 4104, 4123, 4124,
    4125, 4126, 4154, 4127, 4122, 4128, 4109, 4107, 4129, 4130, 4131, 4132,
    4133, 4134, 4108, 4135, 4136, 4137, 4138, 4139, 4140, 4141, 4142, 4110,
    4105, 4118, 4119, 4143, 4144, 4145, 4146, 4120, 4121, 4147, 4111, 4106,
    4148, 4149, 4150, 4153, 4151, 4152, 4112, 4114, 4115, 4117, 4116,
  ],
};

module.exports.FINANCE_INDEX_TEMPLATE = {
  'Chỉ số định giá': [53, 83, 54, 84, 55, 85, 57, 86, 58, 60, 61, 102, 103],
  'Chỉ số sinh lợi': [41, 42, 43, 44, 45, 46, 47],
  'Chỉ số tăng trưởng': [30, 31, 32, 33, 34, 35, 36, 37],
  'Chỉ số thanh khoản': [1, 2, 3, 4, 5],
  'Chỉ số hiệu quả hoạt động': [62, 63, 64, 65, 66, 67, 68, 69, 70],
  'Chỉ số đòn bẩy tài chính': [6, 7, 8, 9, 10, 11, 12],
  'Chỉ số dòng tiền': [95, 96, 48, 97, 98, 99, 49, 50, 100, 101],
  'Cơ cấu chi phí': [25, 27, 28, 29],
  'Cơ cấu tài sản ngắn hạn': [13, 14, 15, 16, 17, 18],
  'Cơ cấu tài sản dài hạn': [19, 20, 21, 22, 23, 24],
};

module.exports.FILE_ACTIVATE_ACCOUNT_DONE =
  'config/html/active_account_done.html';
module.exports.FILE_ACTIVATE_ACCOUNT_FAILED =
  'config/html/active_account_failed.html';
module.exports.FILE_ACTIVATE_ACCOUNT_TEMPLATE =
  'config/html/activate_account_template.html';
module.exports.FILE_FORGOT_PASSWORD = 'config/html/forgot_password.html';
module.exports.FILE_RESET_PASSWORD = 'config/html/reset_password_template.html';
module.exports.FILE_CONFIRM_PAYMENT = 'config/html/order_confirmation.html';
module.exports.FILE_ORDER_SUCCESS = 'config/html/order_success_template.html';
module.exports.FILE_PAYMENT_FAILED = 'config/html/order_failed.html';
module.exports.FILE_REGISTRATION_SUCCESS =
  'config/html/registration_success_template.html';
module.exports.FILE_CREATE_ORDER = 'config/html/create_order_template.html';
module.exports.FILE_CHANGE_PASSWORD_SUCCESS =
  'config/html/change_password_success_template.html';
module.exports.FILE_UPGRADE_VIP_SUCCESS =
  'config/html/upgrade_vip_success_template.html';
module.exports.FILE_EXTEND_VIP_SUCCESS =
  'config/html/extend_vip_success_template.html';
module.exports.FILE_NEW_COURSE = 'config/html/new_course_template.html';
module.exports.FILE_EXTEND_COURSE = 'config/html/extend_course_template.html';
module.exports.FILE_ALMOST_EXPIRED_VIP =
  'config/html/almost_expired_vip_template.html';
module.exports.FILE_EXPIRED_VIP = 'config/html/expired_vip_template.html';
module.exports.FILE_ALMOST_EXPIRED_COURSE =
  'config/html/almost_expired_course_template.html';
module.exports.FILE_EXPIRED_COURSE = 'config/html/expired_course_template.html';

/* Auth error code */
module.exports.ERRNO_ACCOUNT_NOT_ACTIVATED = 409;

/* Maximum upload file size, in MB */
module.exports.MAXIMUM_UPLOAD_FILE_SIZE = 5120;

module.exports.EXTRA_REPORT_DATA_VALUE = {
  'Tỷ suất lợi nhuận gộp biên': null,
  'Tỷ suất sinh lợi trên doanh thu thuần': null,
  'Tỷ suất lợi nhuận trên vốn chủ sở hữu bình quân (ROEA)': null,
  'Tỷ suất sinh lợi trên tổng tài sản bình quân (ROAA)': null,
};

module.exports.SELLING_PRODUCT_TYPE = {
  WEBINAR: 'WEBINAR',
  COURSE: 'COURSE',
  PLAN: 'PLAN',
  BOOK: 'BOOK',
};

module.exports.VOUCHER_TYPE = {
  PERCENT: 'PERCENT',
  ABSOLUTE: 'ABSOLUTE',
  DAY: 'DAY',
};

module.exports.PAYMENT_CHANNEL = {
  BANKTRANSFER: 'BANKTRANSFER',
  MOMO: 'MOMO',
  VNPAY: 'VNPAY',
};

module.exports.ORDER_STATUS = {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  SHIPPED: 'SHIPPED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  FAILED: 'FAILED',
};

/* VNPAY */
/**
 * Trang web điều hướng về khi thanh toán xong
 */
module.exports.PATH_ORDER_VNPAY_RETURN = '/api/v1/order/vnpay_return';
module.exports.PATH_ORDER_VNPAY_IPN = '/api/v1/vnpay/ipn';
module.exports.VNPAY_LOG_FILE_PATH = './vnpay.log';
module.exports.TMN_CODE = NODE_ENV == 'dev' ? 'MONEYG01' : 'MNGAIN01';
module.exports.VNPAY_PAY_URL =
  NODE_ENV == 'dev'
    ? 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'
    : 'https://pay.vnpay.vn/vpcpay.html';
