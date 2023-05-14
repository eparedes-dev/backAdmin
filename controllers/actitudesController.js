const pool = require('../config/db');

  const getActitudesDB = async (req, res) => {
    try {
      const [listAct] = await pool.promise().query('select * from actitudes');
      res.json(listAct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al obtener las actitudes.' });
    }
  };
  
module.exports = getActitudesDB;