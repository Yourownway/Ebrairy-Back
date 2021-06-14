require('dotenv').config();

const config = {
  app_port: process.env.APP_PORT,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_port: process.env.DB_PORT,
  db_host: process.env.DB_HOST,
  jwt_secret: process.env.SECRET_JWT
};

module.exports = config;
