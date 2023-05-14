const pool = require('../config/db');

const getALLAlumnos = (callback) => {
  pool.query(`
  SELECT a.idalumno, a.nombre, m.tema AS materia, act.act AS actitud
    FROM alumnos a
    JOIN materia m ON a.idmateria = m.idmateria
    JOIN actitudes act ON a.idactitud = act.idactitud;
  `, (error, results) => {
    if (error) {
      return callback(error, null);
    }
      return callback(null, results);
  });
}

const addAlumno = async (req, res) => {
  try {
    await pool.promise().query('insert into alumnos set ?', [req.body]);
    res.json({ message: 'Alumno insertado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al insertar el Alumno'});
  }
};


const deleteAlumno= async (req, res) => {
  try{
    await pool.promise().query('delete from alumnos where idalumno = ?',req.params.id);
    res.json({ message: 'Alumno Eliminada' });
  }catch(error){
    console.error(error);
    res.status(500).json({error:'Error al eliminar el Alumno'});
  }
}
const updateAlumno = async (req,res) => {
  try{
    await pool.promise().query('UPDATE alumnos SET ? WHERE idalumno = ?',[req.body, req.params.id]);
    res.json({message: 'Alumno Actualizado'});
  }catch(error){
    console.error(error);
    res.status(500).json({error:'Error al actualizar el Alumno'});
  }
}

module.exports = {getALLAlumnos,addAlumno,deleteAlumno,updateAlumno};