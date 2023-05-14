const connection = require('../config/db');

const getALLAlumnos = (result) => {
  connection.query("select * from alumnos", (error,results)=>{
    if(error){
      console.log(error);
      result(error,null);
    } else{
      result (null,results);
    }
  });
}
  
module.exports = getALLAlumnos;