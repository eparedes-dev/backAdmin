const connection = require('../config/db');

const getALLMaestros= (result) => {
  connection.query(`
  SELECT ma.idmaestro, ma.nombre, m.tema AS materia, apt.apt AS aptitud
  FROM maestro ma
  JOIN materia m ON ma.idmateria = m.idmateria
  JOIN aptitudes apt ON ma.idaptitud = apt.idaptitud;
  `, (error,results)=>{
    if(error){
      console.log(error);
      result(error,null);
    } else{
      result (null,results);
    }
  });
}
  
module.exports = getALLMaestros;