// DEVELOPER CONFIG

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.DB_PORT,
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: parseInt(process.env.DB_POOL_MIN, 10),
    min: parseInt(process.env.DB_POOL_MIN, 10),
    acquire: process.env.DB_POOL_ACQUIRE,
    idle: process.env.DB_POOL_IDLE,
  },
};

