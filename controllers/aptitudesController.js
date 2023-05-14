const {getALLAptitudes} = require('../models/aptitudes')

const getAptitudesDB = (req,res) => {
    getALLAptitudes((error,results)=>{
        if(error){
            res.send(error);
            console.log(error)
        } else{
            res.json(results);
        }
    });
}



module.exports = {getAptitudesDB};