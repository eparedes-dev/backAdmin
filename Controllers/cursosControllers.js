const connection = require('../config/db');
const {getDesMaestros} = require('../Controllers/maestrosControllers');
const {getAscAlumnos} = require('../Controllers/alumnosControllers');

const getAllCursos = (req,result) => {
  connection.query(`
    SELECT c.idcurso, c.nombre AS nombre_curso, m.nombre AS nombre_profesor, GROUP_CONCAT(e.nombre) AS estudiantes_inscritos
    FROM cursos c
    JOIN maestros m ON c.idmaestro = m.idmaestro
    LEFT JOIN inscripciones i ON c.idcurso = i.idcurso
    LEFT JOIN estudiantes e ON i.idestudiante = e.idestudiante
    GROUP BY c.idcurso, c.nombre, m.nombre;
  `, (error,results)=>{
    if(error){
      result.send(error);
      console.log(error);
    } else{
      result.json(results);
    }
  });
}


const getbestCursos = (req,result) =>{
  connection.query(`
    SELECT c.nombre AS curso, GROUP_CONCAT(e.nombre SEPARATOR ', ') AS estudiantes, SUM(q.porcentajeaceptacion) AS suma_porcentaje
    FROM cursos c
    INNER JOIN inscripciones i ON c.idcurso = i.idcurso
    INNER JOIN estudiantes e ON i.idestudiante = e.idestudiante
    INNER JOIN estudiantescualidades ec ON e.idestudiante = ec.idestudiante
    INNER JOIN cualidades q ON ec.idcualidad = q.idcualidad
    GROUP BY c.idcurso
    ORDER BY suma_porcentaje DESC
    LIMIT 3; 
  `,(error,results)=>{
    if(error){
      result.send(error);
      console.log(error);
    } else{
      result.json(results);
    }
  });
}

const crearCursos = async () => {
  try {
    const maestros = await getDesMaestros();
    const alumnos = await getAscAlumnos();

    const totalEstudiantes = alumnos.length;
    const totalMaestros = maestros.length;

    const estPorProf = Math.ceil(totalEstudiantes / totalMaestros); 

    let estudianteIndex = 0;

    for (const maestro of maestros) {
      const idMaestro = maestro.idmaestro;
      const nombreMaestro = maestro.nombre_maestro;
      const nombreCurso = `Curso de ${nombreMaestro}`;
      const idCurso = await crearCurso(nombreCurso, idMaestro);

      for (let i = 0; i < estPorProf && estudianteIndex < totalEstudiantes; i++) {
        const idEstudiante = alumnos[estudianteIndex].idestudiante;
        await asignarEstudianteACurso(idEstudiante, idCurso);
        estudianteIndex++;
      }
    }
    resolve();
  } catch (error) {
    console.log(error);
  }
};

const crearCurso = (nombreCurso, idMaestro) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'INSERT INTO cursos (nombre, idmaestro) VALUES (?, ?)',
      [nombreCurso, idMaestro],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          const idCurso = results.insertId;
          resolve(idCurso);
        }
      }
    );
  });
};

const asignarEstudianteACurso = (idEstudiante, idCurso) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'INSERT INTO inscripciones (idestudiante, idcurso) VALUES (?, ?)',
      [idEstudiante, idCurso],
      (error, results) => {
        if (error) {
          reject(error);
          console.log(error);
        } else {
          const idCurso = results.insertId;
          resolve(idCurso);
        }
      }
    );
  });
};



module.exports = { crearCursos, getAllCursos, getbestCursos};

