const connection = require('../config/db');

const getAllInscripciones = (req,result) => {
  connection.query("select * from inscripciones", (error,results)=>{
    if(error){
      result.send(error);
      console.log(error);
    } else{
      result.json(results);
    }
  });
}
  
module.exports = getAllInscripciones;