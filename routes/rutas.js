const getAptitudesDB = require('../controllers/aptitudesController.js')
const getActitudesDB = require('../controllers/actitudesController.js');
const getMateriasDB = require('../controllers/materiasController.js');
const getMaestrosDB = require('../controllers/maestrosController.js');
const getAlumnosDB = require('../controllers/alumnosController.js');
const getCursosDB = require('../controllers/cursosController.js');
const express = require('express')

const router = express.Router();

router.get('/aptitudes',getAptitudesDB);
router.get('/actitudes',getActitudesDB);
router.get('/materias',getMateriasDB);
router.get('/maestros',getMaestrosDB);
router.get('/alumnos',getAlumnosDB);
router.get('/cursos',getCursosDB);

module.exports = router;