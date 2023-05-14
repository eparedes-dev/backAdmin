const pool = require('../config/db');

const getAlumnosDB = async (req, res) => {
    try {
      const [listAct] = await pool.promise().query(`
      SELECT a.idalumno, a.nombre, m.tema AS materia, act.act AS actitud
        FROM alumnos a
        JOIN materia m ON a.idmateria = m.idmateria
        JOIN actitudes act ON a.idactitud = act.idactitud;
      `);
      res.json(listAct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al obtener los Alumnos.' });
    }
  };
  
const crearAlumno = async (req,res) => {
    try {
        await pool.promise().query('insert into alumnos set ?', [req.body]);
        res.json({ message: 'Alumno insertado' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al insertar el Alumno'});
      }
};

const eliminarAlumno = async (req, res) => {
    try{
        await pool.promise().query('delete from alumnos where idalumno = ?',req.params.id);
        res.json({ message: 'Alumno Eliminada' });
      }catch(error){
        console.error(error);
        res.status(500).json({error:'Error al eliminar el Alumno'});
      }
};

const actualizarAlumno = async (req, res) => {
    try{
        await pool.promise().query('UPDATE alumnos SET ? WHERE idalumno = ?',[req.body, req.params.id]);
        res.json({message: 'Alumno Actualizado'});
      }catch(error){
        console.error(error);
        res.status(500).json({error:'Error al actualizar el Alumno'});
      }
};




module.exports = {getAlumnosDB,crearAlumno,eliminarAlumno,actualizarAlumno};