const { Pool } = require('pg');
const dbConfig = require('../secrets/db_configuration');

const pool = new Pool(dbConfig);

module.exports = pool;
