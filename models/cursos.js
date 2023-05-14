const pool = require('../config/db');

const getALLCursos = (callback) => {
  pool.query(`
  SELECT c.idcurso, m.tema AS materia, ma.nombre AS maestro
  FROM curso c
  JOIN materia m ON c.idmateria = m.idmateria
  JOIN maestro ma ON c.idmaestro = ma.idmaestro;
  `, (error, results) => {
    if (error) {
      return callback(error, null);
    }
      return callback(null, results);
  });
}
  
module.exports = getALLCursos;