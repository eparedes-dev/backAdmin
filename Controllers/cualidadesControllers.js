const connection = require('../config/db');

const getAllCualidades = (req,result) => {
  connection.query("select * from cualidades", (error,results)=>{
    if(error){
      result.send(error);
      console.log(error);
    } else{
      result.json(results);
    }
  });
}
  
module.exports = getAllCualidades;