const connection = require('../config/db');

const getAllCualidadesAlumnos = (req,result) => {
  connection.query("select * from estudiantescualidades", (error,results)=>{
    if(error){
      result.send(error);
      console.log(error);
    } else{
      result.json(results);
    }
  });
}
  
module.exports = getAllCualidadesAlumnos;