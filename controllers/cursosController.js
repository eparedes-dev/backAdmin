const getALLCursos = require('../models/cursos')

const getCursosDB = (req,res) => {
    getALLCursos((error,results)=>{
        if(error){
            res.send(error);
            console.log(error)
        } else{
            res.json(results);
        }
    });
}

module.exports = getCursosDB;