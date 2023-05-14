const pool = require('../config/db');

const getCursosDB = async (req, res) => {
    try {
      const [listApt] = await pool.promise().query(`
      SELECT c.idcurso, m.tema AS materia, ma.nombre AS maestro
      FROM curso c
      JOIN materia m ON c.idmateria = m.idmateria
      JOIN maestro ma ON c.idmaestro = ma.idmaestro;
      `);
      res.json(listApt);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al obtener los cursos.' });
    }
  };

module.exports = getCursosDB;