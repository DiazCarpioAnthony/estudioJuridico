CREATE DATABASE ng_estudio_juridico_db;

USE ng_estudio_juridico_db;

CREATE TABLE publicacion (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    categoria arreglo,
    resumen VARCHAR(180),
    fecha DATE,
    keywords arreglo

)


INSERT INTO categoria (nombre_categoria, descripcion, icono)
VALUES ('Leyes Familiares', 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.', 'flaticon-family');
INSERT INTO categoria (nombre_categoria, descripcion, icono)
VALUES ('Leyes de Negocio','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-auction');
INSERT INTO categoria (nombre_categoria, descripcion, icono)
VALUES ('Leyes de Seguros','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-shield');
INSERT INTO categoria (nombre_categoria, descripcion, icono)
VALUES ('Leyes Criminales','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-handcuffs');
INSERT INTO categoria (nombre_categoria, descripcion, icono)
VALUES ('Leyes de Propiedad','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-house');
INSERT INTO categoria (nombre_categoria, descripcion, icono)
VALUES ('Leyes de Empleado','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-employee');
INSERT INTO categoria (nombre_categoria, descripcion, icono)
VALUES ('Leyes de Accidentes','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-fire');
INSERT INTO categoria (nombre_categoria, descripcion, icono)
VALUES ('Leyes Financieras','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-money');
INSERT INTO categoria (nombre_categoria, descripcion, icono)
VALUES ('Leyes de Medicinas','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-medicine');
INSERT INTO categoria (nombre_categoria, descripcion, icono)
VALUES ('Ofensas Sexuales','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-handcuffs');

INSERT INTO usuarios (nombre, email, password)
VALUES ('Anthony','anthony.diaz2@unmsm.edu.pe','anthony123');