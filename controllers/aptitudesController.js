const pool = require('../config/db');

const getAptitudesDB = async (req, res) => {
    try {
      const [listApt] = await pool.promise().query('select * from aptitudes');
      res.json(listApt);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al obtener las aptitudes.' });
    }
  };


module.exports = {getAptitudesDB};