const {getAptitudesDB} = require('../controllers/aptitudesController.js')
const getActitudesDB = require('../controllers/actitudesController.js');
const getMateriasDB = require('../controllers/materiasController.js');
const {getMaestrosDB,crearMaestro,actualizarMaestro,eliminarMaestro} = require('../controllers/maestrosController.js');
const {getAlumnosDB,crearAlumno,eliminarAlumno,actualizarAlumno} = require('../controllers/alumnosController.js');
const getCursosDB = require('../controllers/cursosController.js');
const express = require('express')

const router = express.Router();

router.get('/aptitudes',getAptitudesDB);
router.get('/actitudes',getActitudesDB);
router.get('/materias',getMateriasDB);
router.get('/cursos',getCursosDB);

router.get('/maestros',getMaestrosDB);
router.post('/maestros',crearMaestro);
router.delete('/maestros/:id',eliminarMaestro);
router.put('/maestros/:id',actualizarMaestro);

router.get('/alumnos',getAlumnosDB);
router.post('/alumnos',crearAlumno);
router.delete('/alumnos/:id',eliminarAlumno);
router.put('/alumnos/:id',actualizarAlumno);

module.exports = router;