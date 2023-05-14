const pool = require('../config/db');

const getALLAptitudes = (callback) => {
  pool.query('SELECT * FROM aptitudes', (error, results) => {
    if (error) {
      return callback(error, null);
    }
      return callback(null, results);
  });
}

module.exports = {getALLAptitudes};