const connection = require('../config/db');

const getALLAlumnos = (result) => {
  connection.query(`
    SELECT a.idalumno, a.nombre, m.tema AS materia, act.act AS actitud
    FROM alumnos a
    JOIN materia m ON a.idmateria = m.idmateria
    JOIN actitudes act ON a.idactitud = act.idactitud;
  `, (error, results) => {
    if (error) {
      console.log(error);
      result(error, null);
    } else {
      result(null, results);
    }
  });
}
  
module.exports = getALLAlumnos;