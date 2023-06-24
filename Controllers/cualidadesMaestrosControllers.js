const connection = require('../config/db');

const getAllCualidadesMaestros = (req,result) => {
  connection.query("select * from maestroscualidades", (error,results)=>{
    if(error){
      result.send(error);
      console.log(error);
    } else{
      result.json(results);
    }
  });
}
  
module.exports = getAllCualidadesMaestros;