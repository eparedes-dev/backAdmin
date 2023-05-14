const getALLAlumnos = require('../models/alumnos')

const getAlumnosDB = (req,res) => {
    getALLAlumnos((error,results)=>{
        if(error){
            res.send(error);
            console.log(error)
        } else{
            res.json(results);
        }
    });
}

module.exports = getAlumnosDB;