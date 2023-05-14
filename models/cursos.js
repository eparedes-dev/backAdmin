const connection = require('../config/db');

const getALLCursos = (result) => {
  connection.query(`
  SELECT c.idcurso, m.tema AS materia, ma.nombre AS maestro
  FROM curso c
  JOIN materia m ON c.idmateria = m.idmateria
  JOIN maestro ma ON c.idmaestro = ma.idmaestro;
  `, (error,results)=>{
    if(error){
      console.log(error);
      result(error,null);
    } else{
      result (null,results);
    }
  });
}
  
module.exports = getALLCursos;