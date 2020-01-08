const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    database_url: process.env.DB_URL,
    dbEnv: process.env.DB_ENV,
    database_name: process.env.DB_NAME,
    database_user: process.env.DB_USERNAME
}