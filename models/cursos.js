const connection = require('../config/db');

const getALLCursos = (result) => {
  connection.query("select * from curso", (error,results)=>{
    if(error){
      console.log(error);
      result(error,null);
    } else{
      result (null,results);
    }
  });
}
  
module.exports = getALLCursos;