const {getALLAlumnos,addAlumno,updateAlumno,deleteAlumno} = require('../models/alumnos')

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
  
const crearAlumno = (req,res) => {
    addAlumno(req,res);
};

const eliminarAlumno = (req, res) => {
    deleteAlumno(req,res);
};

const actualizarAlumno = (req, res) => {
    updateAlumno(req,res);
};




module.exports = {getAlumnosDB,crearAlumno,eliminarAlumno,actualizarAlumno};