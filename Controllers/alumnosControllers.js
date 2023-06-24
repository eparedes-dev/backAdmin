const connection = require('../config/db');

const getAllAlumnos = (req,result) => {
  connection.query("select * from estudiantes", (error,results)=>{
    if(error){
      result.send(error);
      console.log(error)
  } else{
      result.json(results);
  }
  });
}


const getAscAlumnos = () => {
  return new Promise((resolve, reject) => {
    connection.query(`
      SELECT e.idestudiante, e.nombre AS nombre_estudiante, SUM(c.porcentajeaceptacion) AS porcentaje_total
      FROM estudiantes e
      JOIN estudiantescualidades ec ON e.idestudiante = ec.idestudiante
      JOIN cualidades c ON ec.idcualidad = c.idcualidad
      GROUP BY e.idestudiante
      ORDER BY porcentaje_total ASC;
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

// const getAscAlumnos = (req,res) => {
//   connection.query(`
//     SELECT e.nombre AS nombre_estudiante, SUM(c.porcentajeaceptacion) AS porcentaje_total
//     FROM estudiantes e
//     JOIN estudiantescualidades ec ON e.idestudiante = ec.idestudiante
//     JOIN cualidades c ON ec.idcualidad = c.idcualidad
//     GROUP BY e.idestudiante
//     ORDER BY porcentaje_total ASC;
//     `, (error,results) =>{
//     if(error){
//       res.send(error);
//       console.log(error)
//     } else{
//         res.json(results);
//     }
//   });
// }


module.exports = {getAllAlumnos,getAscAlumnos};