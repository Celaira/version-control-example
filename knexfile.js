// Update with your config settings.
const { database_url, database_name, database_user  } = require('./config/config');


module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: database_name,
      username: database_user,
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
