const connection = require('../config/db');

const getAllMaestros = (req,result) => {
  connection.query("select * from maestros", (error,results)=>{
    if(error){
      result.send(error);
      console.log(error);
    } else{
      result.json(results);
    }
  });
}

const getDesMaestros = () => {
  return new Promise((resolve, reject) => {
    connection.query(`
      SELECT m.idmaestro,m.nombre AS nombre_maestro, SUM(c.porcentajeaceptacion) AS porcentaje_total
      FROM maestros m
      JOIN maestroscualidades mc ON m.idmaestro = mc.idmaestro
      JOIN cualidades c ON mc.idcualidad = c.idcualidad
      GROUP BY m.idmaestro
      ORDER BY porcentaje_total DESC;
    `, (error, results) => {
      if (error) {
        reject(error);
        console.log(error);
      } else {
        resolve(results);
      }
    });
  });
};


module.exports = {getAllMaestros,getDesMaestros};