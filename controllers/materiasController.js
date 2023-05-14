const getALLMaterias = require('../models/materia')

const getMateriasDB = (req,res) => {
    getALLMaterias((error,results)=>{
        if(error){
            res.send(error);
            console.log(error)
        } else{
            res.json(results);
        }
    });
}

module.exports = getMateriasDB;