const getALLMaestros = require('../models/maestros')

const getMaestrosDB = (req,res) => {
    getALLMaestros((error,results)=>{
        if(error){
            res.send(error);
            console.log(error)
        } else{
            res.json(results);
        }
    });
}

module.exports = getMaestrosDB;