/**
 * author: chiennguyen
 * copyright: MDC VietNam
 * Định nghĩa các biến cho từng môi trường dev/pro
 */

//module.exports.BASE_URL             = 'http://127.0.0.1:8080'

//module.exports.UPLOAD_DIR           = '/Users/chiennguyen/Projects/MoneyGain/moneygain-backend/uploads/';

// LOCAL SERVER
// module.exports.UPLOAD_DIR           = './uploads/';

// DEV  SERVER
module.exports.UPLOAD_DIR = process.env.UPLOAD_DIR;
module.exports.BASE_URL = process.env.BASE_URL;
module.exports.PUBLIC_UPLOAD_DIR = process.env.PUBLIC_UPLOAD_DIR;

module.exports.GOOGLE_MAILER_CLIENT_ID = process.env.GOOGLE_MAILER_CLIENT_ID;
module.exports.GOOGLE_MAILER_CLIENT_SECRET =
  process.env.GOOGLE_MAILER_CLIENT_SECRET;
module.exports.GOOGLE_MAILER_REFRESH_TOKEN =
  process.env.GOOGLE_MAILER_REFRESH_TOKEN;
module.exports.ADMIN_EMAIL_ADDRESS = process.env.ADMIN_EMAIL_ADDRESS;

module.exports.CLIENT_BASE_URL = process.env.CLIENT_BASE_URL;
module.exports.ADMIN_BASE_URL = process.env.ADMIN_BASE_URL;

module.exports.DEBUG = !!process.env.DEBUG;
module.exports.NODE_ENV = process.env.NODE_ENV;
module.exports.VNPAY_HASH_SECRET = process.env.VNPAY_HASH_SECRET;
