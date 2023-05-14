const connection = require('../config/db');

const getALLAptitudes = (result) => {
  connection.query("select * from aptitudes", (error,results)=>{
    if(error){
      console.log(error);
      result(error,null);
    } else{
      result (null,results);
    }
  });
}
  
module.exports = getALLAptitudes;