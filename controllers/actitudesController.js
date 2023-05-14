const getALLActitudes = require('../models/actitudes')

const getActitudesDB = (req,res) => {
    getALLActitudes((error,results)=>{
        if(error){
            res.send(error);
            console.log(error)
        } else{
            res.json(results);
        }
    });
}

module.exports = getActitudesDB;