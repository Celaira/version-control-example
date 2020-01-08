const knex = require('knex');
const config = require('../knexfile.js');
const { dbEnv } = require('../config/config');




module.exports = knex(config[dbEnv]);