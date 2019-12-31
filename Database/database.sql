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


INSERT INTO publicacion (title, description, image, resumen, id_categoria)
VALUES ('Gastos por servicios: ¿adecuándose a la OCDE?','Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE incluyen nuevas reglas que las empresas domiciliadas deben seguir para la deducción de gastos por servicios prestados por sus empresas relacionadas. Así, el usuario que pretenda deducir el gasto debe ahora satisfacer un “test de beneﬁcio”, que implica demostrar que el servicio le es útil, por agregarle valor, mejorando o manteniendo su posición comercial','login.png','Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE.', 25);

select title, description, image, resumen, nombre_categoria from publicacion join categoria 
ON publicacion.id_categoria = categoria.id_categoria
where id_publicacion = 3;