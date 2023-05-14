const pool = require('../config/db');

const getALLMaestros = (callback) => {
  pool.query(`
    SELECT ma.idmaestro, ma.nombre, m.tema AS materia, apt.apt AS aptitud
    FROM maestro ma
    JOIN materia m ON ma.idmateria = m.idmateria
    JOIN aptitudes apt ON ma.idaptitud = apt.idaptitud;
  `, (error, results) => {
    if (error) {
      return callback(error, null);
    }
      return callback(null, results);
  });
}


const addMaestro = async (req, res) => {
  try {
    await pool.promise().query('insert into maestro set ?', [req.body]);
    res.json({ message: 'Maestro insertado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al insertar el Maestro'});
  }
};


const deleteMaestro = async (req, res) => {
  try{
    await pool.promise().query('delete from maestro where idmaestro = ?',req.params.id);
    res.json({ message: 'Maestro Eliminado' });
  }catch(error){
    console.error(error);
    res.status(500).json({error:'Error al eliminar el Maestro'});
  }
};

const updateMaestro = async (req,res) => {
  try{
    await pool.promise().query('UPDATE maestro SET ? WHERE idmaestro = ?',[req.body, req.params.id]);
    res.json({message: 'Maestro Actualizado'});
  }catch(error){
    console.error(error);
    res.status(500).json({error:'Error al actualizar el Maestro'});
  }
};
  
module.exports = {getALLMaestros,addMaestro,updateMaestro,deleteMaestro};