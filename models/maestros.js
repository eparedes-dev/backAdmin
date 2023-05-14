const connection = require('../config/db');

const getALLMaestros= (result) => {
  connection.query("select * from maestro", (error,results)=>{
    if(error){
      console.log(error);
      result(error,null);
    } else{
      result (null,results);
    }
  });
}
  
module.exports = getALLMaestros;