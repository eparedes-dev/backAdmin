const connection = require('../config/db');

const getALLMaterias= (result) => {
  connection.query("select * from materia", (error,results)=>{
    if(error){
      console.log(error);
      result(error,null);
    } else{
      result (null,results);
    }
  });
}
  
module.exports = getALLMaterias;