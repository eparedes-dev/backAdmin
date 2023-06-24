const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'ari',
    password: '123456',
    database: 'base_sis_core'
  });

module.exports = connection;