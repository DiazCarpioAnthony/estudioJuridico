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