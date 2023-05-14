const pool = require('../config/db');

const getALLMaterias = (callback) => {
  pool.query('SELECT * FROM materia', (error, results) => {
    if (error) {
      return callback(error, null);
    }
      return callback(null, results);
  });
}
module.exports = getALLMaterias;