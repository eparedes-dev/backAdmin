const pool = require('../config/db');

const getMateriasDB = async (req, res) => {
    try {
      const [listApt] = await pool.promise().query('select * from materia');
      res.json(listApt);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al obtener las materias.' });
    }
  };

module.exports = getMateriasDB;