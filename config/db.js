const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'erick',
  password: '123456',
  database: 'base_sis_core'
});

pool.getConnection((error, connection) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Base de datos conectada');
  connection.release();
});

module.exports = pool;