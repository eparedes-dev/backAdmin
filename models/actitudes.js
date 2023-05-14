const pool = require('../config/db');

const getALLActitudes = (callback) => {
  pool.query('SELECT * FROM actitudes', (error, results) => {
    if (error) {
      return callback(error, null);
    }
      return callback(null, results);
  });
}
  

module.exports = getALLActitudes;