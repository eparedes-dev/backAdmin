const connection = require('../config/db');

const getALLActitudes = (result) => {
    connection.query("select * from actitudes", (error,results)=>{
      if(error){
        console.log(error);
        result(error,null);
      } else{
        result (null,results);
      }
    });
  }

module.exports = getALLActitudes;