const express = require('express');
const {getAllAlumnos, getAscAlumnos} =  require('../Controllers/alumnosControllers');
const {getAllMaestros,getDesMaestros} = require('../Controllers/maestrosControllers');
const getAllCualidades = require('../Controllers/cualidadesControllers');
const {getAllCursos, crearCursos, getbestCursos} = require('../Controllers/cursosControllers');
const getAllCualidadesMaestros = require('../Controllers/cualidadesMaestrosControllers');
const getAllCualidadesAlumnos = require('../Controllers/cualidadesAlumnosControllers');
const getAllInscripciones = require('../Controllers/inscripcionesControllers');
const router = express.Router();

router.get('/alumnos',getAllAlumnos);
router.get('/maestros',getAllMaestros);
router.get('/cualidades',getAllCualidades);
router.get('/cursos',getAllCursos);
router.get('/cualidadesMaestros',getAllCualidadesMaestros);
router.get('/cualidadesAlumnos',getAllCualidadesAlumnos);
router.get('/inscripciones',getAllInscripciones);
router.post('/crearcursos', crearCursos);
router.get('/podio', getbestCursos);

module.exports = router;