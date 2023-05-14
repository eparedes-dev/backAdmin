const {getALLMaestros,addMaestro,updateMaestro,deleteMaestro} = require('../models/maestros')

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

const crearMaestro = (req,res) => {
    addMaestro(req,res);
};

const eliminarMaestro = (req, res) => {
    deleteMaestro(req,res);
};

const actualizarMaestro = (req, res) => {
    updateMaestro(req,res);
};


module.exports = {getMaestrosDB,crearMaestro,eliminarMaestro,actualizarMaestro};