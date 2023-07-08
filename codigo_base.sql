drop database if exists base_sis_core;

Create database base_sis_core;

use base_sis_core;

drop table if exists maestros;
CREATE TABLE maestros (
    idmaestro INT PRIMARY KEY,
    nombre VARCHAR(50)
);

drop table if exists estudiantes;
CREATE TABLE estudiantes (
    idestudiante INT PRIMARY KEY,
    nombre VARCHAR(50)
);

drop table if exists cualidades;
CREATE TABLE cualidades (
  idcualidad INT PRIMARY KEY,
  nombre VARCHAR(100),
  porcentajeaceptacion DECIMAL(5, 2)
);

drop table if exists maestroscualidades;
CREATE TABLE maestroscualidades (
    idmaestro INT,
    idcualidad INT,
    PRIMARY KEY (idmaestro, idcualidad),
    FOREIGN KEY (idmaestro) REFERENCES maestros(idmaestro),
    FOREIGN KEY (idcualidad) REFERENCES cualidades(idcualidad)
);

drop table if exists estudiantescualidades;
CREATE TABLE estudiantescualidades (
    idestudiante INT,
    idcualidad INT,
    PRIMARY KEY (idestudiante, idcualidad),
    FOREIGN KEY (idestudiante) REFERENCES estudiantes(idestudiante),
    FOREIGN KEY (idcualidad) REFERENCES cualidades(idcualidad)
);

drop table if exists cursos;
CREATE TABLE cursos (
    idcurso INT PRIMARY KEY,
    nombre VARCHAR(50),
    idmaestro INT,
    FOREIGN KEY (idmaestro) REFERENCES maestros(idmaestro)
);

drop table if exists inscripciones;
CREATE TABLE inscripciones (
    idestudiante INT,
    idcurso INT,
    PRIMARY KEY (idestudiante, idcurso),
    FOREIGN KEY (idestudiante) REFERENCES estudiantes(idestudiante),
    FOREIGN KEY (idcurso) REFERENCES cursos(idcurso)
);


INSERT INTO cualidades (idcualidad, nombre, porcentajeaceptacion)
VALUES
  (1, 'Creatividad', 0.8),
  (2, 'Responsabilidad', 0.9),
  (3, 'Comunicación', 0.7),
  (4, 'Puntualidad', 0.95),
  (5, 'Trabajo en equipo', 0.85);

-- Insertar datos en la tabla "maestros"
INSERT INTO maestros (idmaestro, nombre)
VALUES
  (1, 'Juan Perez'),
  (2, 'María López'),
  (3, 'Pedro Gómez'),
  (4, 'Ana Rodríguez'),
  (5, 'Carlos Sanchez');

-- Insertar datos en la tabla "estudiantes"
INSERT INTO estudiantes (idestudiante, nombre)
VALUES
  (1, 'Laura Martinez'),
  (2, 'Andrés Ramirez'),
  (3, 'Sofía González'),
  (4, 'Alejandro Torres'),
  (5, 'Valentina Herrera'),
  (6, 'Javier Romero'),
  (7, 'Camila Diaz'),
  (8, 'Diego Silva'),
  (9, 'Carolina Vargas'),
  (10, 'Miguel Castro');

-- Insertar datos en la tabla "maestroscualidades"
INSERT INTO maestroscualidades (idmaestro, idcualidad)
VALUES
  (1, 1),
  (1, 2),
  (2, 2),
  (2, 3),
  (3, 1),
  (3, 4),
  (4, 3),
  (4, 5),
  (5, 4),
  (5, 5);

-- Insertar datos en la tabla "estudiantescualidades"
INSERT INTO estudiantescualidades (idestudiante, idcualidad)
VALUES
  (1, 1),
  (1, 3),
  (2, 2),
  (2, 5),
  (3, 1),
  (3, 4),
  (4, 3),
  (4, 5),
  (5, 2),
  (5, 4),
  (6, 1),
  (6, 3),
  (7, 2),
  (7, 5),
  (8, 1),
  (8, 4),
  (9, 3),
  (9, 5),
  (10, 2),
  (10, 4);