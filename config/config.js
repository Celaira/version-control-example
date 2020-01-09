const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  database_url: process.env.DB_URL,
  dbEnv: process.env.DB_ENV,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USERNAME
};
