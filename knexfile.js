// Update with your config settings.
const { database_url, dbName, dbUser  } = require('./config/config');


module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: dbName,
      user: dbUser,
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: database_url,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
