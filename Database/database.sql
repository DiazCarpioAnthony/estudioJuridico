CREATE DATABASE  IF NOT EXISTS `heroku_f0c00c1fc58f05f` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `heroku_f0c00c1fc58f05f`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ng_estudio_juridico_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.38-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `abogado`
--

DROP TABLE IF EXISTS `abogado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `abogado` (
  `id_abogado` int(10) NOT NULL AUTO_INCREMENT,
  `nombre_abogado` varchar(100) NOT NULL,
  `isDoctor` tinyint(1) NOT NULL,
  `DNI` varchar(45) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `colegiatura` varchar(100) DEFAULT NULL,
  `condicion` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id_abogado`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `abogado`
--

LOCK TABLES `abogado` WRITE;
/*!40000 ALTER TABLE `abogado` DISABLE KEYS */;
INSERT INTO `abogado` VALUES (5,'Andrés Jaime Gutiérrez Yábar',1,'29303726','andresyab58@gmail.com','C.A.A. Nº 233','Abogado','assets/images/person_1.jpg'),(6,'Fredy Alfredo Gutiérrez Yábar',1,'29303657','alfredoguty_5@hotmail.com','C.A.A. Nº  2271','Abogado','assets/images/person_2.jpg'),(7,'Jose Luis Gutierrez Aguilar',1,'29354256','joseluisguty@hotmail.com','C.A.L. Nº  75391','Abogado','assets/images/person_3.jpg'),(8,'Jhover Waldo Meza Huamani',1,'45137535','jhover_nst88@hotmail.com','C.A.L. Nº 72585','Abogado','assets/images/person_4.jpg'),(9,'Aldo Piñan Saavedra',1,'10754409','aldopinansaavedra@gmail.com','C.A.L. Nº 66502','Abogado','assets/images/person_3.jpg'),(10,'Roy Ronal Soncco Cahuana',1,'47668409',' kenzie_maem@hotmail.com','C.A.A. Nº  11166','Abogado','assets/images/person_4.jpg'),(11,'Roxana Yamaly Roque Huamani',0,'46799880','roxanayrh@gmail.com',NULL,'Bachiller en Derecho','assets/images/person_4.jpg'),(12,'Tatiana Florangel Colque Villalba',0,'73203932','tatianacolque86@gmail.com',NULL,'Bachiller en Derecho','assets/images/person_3.jpg'),(13,'Lucia Veronica Velasquez Almeida',1,'10112637','lveronica6@hotmail.com',NULL,'X Ciclo Derecho','assets/images/person_4.jpg');
/*!40000 ALTER TABLE `abogado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `icono` varchar(100) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (24,'Leyes Familiares','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-family'),(25,'Leyes de Negocio','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-auction'),(26,'Leyes de Seguros','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-shield'),(27,'Leyes Criminales','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-handcuffs'),(28,'Leyes de Propiedad','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-house'),(29,'Leyes de Empleado','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-employee'),(30,'Leyes de Accidentes','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-fire'),(31,'Leyes Financieras','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-money'),(32,'Leyes de Medicinas','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-medicine'),(33,'Ofensas Sexuales','Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.','flaticon-handcuffs');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keyword`
--

DROP TABLE IF EXISTS `keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keyword` (
  `id_keyword` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_keyword` varchar(100) NOT NULL,
  PRIMARY KEY (`id_keyword`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (5,'Nuevo'),(6,'2020'),(7,'2019');
/*!40000 ALTER TABLE `keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keyword_has_publicacion`
--

DROP TABLE IF EXISTS `keyword_has_publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keyword_has_publicacion` (
  `id_keyword` int(11) NOT NULL,
  `id_publicacion` int(11) NOT NULL,
  PRIMARY KEY (`id_keyword`,`id_publicacion`),
  KEY `fk_keyword_has_publicacion_publicacion1_idx` (`id_publicacion`),
  KEY `fk_keyword_has_publicacion_keyword1_idx` (`id_keyword`),
  CONSTRAINT `fk_keyword_has_publicacion_keyword1` FOREIGN KEY (`id_keyword`) REFERENCES `keyword` (`id_keyword`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_keyword_has_publicacion_publicacion1` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id_publicacion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword_has_publicacion`
--

LOCK TABLES `keyword_has_publicacion` WRITE;
/*!40000 ALTER TABLE `keyword_has_publicacion` DISABLE KEYS */;
INSERT INTO `keyword_has_publicacion` VALUES (5,3),(5,4),(5,6),(5,11),(5,24),(5,47),(5,48),(5,51),(5,53),(5,56),(5,57),(5,61),(5,62),(5,63),(5,65),(5,66),(6,3),(6,8),(6,10),(6,24),(6,47),(6,51),(6,53),(6,56),(6,57),(6,60),(6,66),(7,48),(7,53);
/*!40000 ALTER TABLE `keyword_has_publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion`
--

DROP TABLE IF EXISTS `publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `publicacion` (
  `id_publicacion` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(200) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `resumen` text NOT NULL,
  `id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`id_publicacion`,`id_categoria`),
  KEY `fk_publicacion_categoria_idx` (`id_categoria`),
  CONSTRAINT `fk_publicacion_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
INSERT INTO `publicacion` VALUES (3,'Gastos por servicios: ¿adecuándose a la OCDE?','Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE incluyen nuevas reglas que las empresas domiciliadas deben seguir para la deducción de gastos por servicios prestados por sus empresas relacionadas. Así, el usuario que pretenda deducir el gasto debe ahora satisfacer un “test de beneﬁcio”, que implica demostrar que el servicio le es útil, por agregarle valor, mejorando o manteniendo su posición comercial. \r\n\r\nMolestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit! \r\n\r\nTemporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-01 00:04:05','Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE.',25),(4,'Prueba1','Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE incluyen nuevas reglas que las empresas domiciliadas deben seguir para la deducción de gastos por servicios prestados por sus empresas relacionadas. Así, el usuario que pretenda deducir el gasto debe ahora satisfacer un “test de beneﬁcio”, que implica demostrar que el servicio le es útil, por agregarle valor, mejorando o manteniendo su posición comercial',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-02 03:54:23','Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE.',25),(5,'Prueba3','Laesas doonadas. al',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-03 02:59:29','Las modificac  la OCDE.',25),(6,' Prueba 3 ',' Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE incluyen nuevas reglas que las empresas domiciliadas deben seguir para la deducción de gastos por servicios prestados por sus empresas relacionadas. Así, el usuario que pretenda deducir el gasto debe ahora satisfacer un “test de beneﬁcio”, que implica demostrar que el servicio le es útil, por agregarle valor, mejorando o manteniendo su posición comercial ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-03 03:06:05',' Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE. ',25),(7,'Prueba4','Laesas doonadas. al',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-03 19:24:59','Las modificac  la OCDE.',25),(8,' Prueba 5 ',' Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE incluyen nuevas reglas que las empresas domiciliadas deben seguir para la deducción de gastos por servicios prestados por sus empresas relacionadas. Así, el usuario que pretenda deducir el gasto debe ahora satisfacer un “test de beneﬁcio”, que implica demostrar que el servicio le es útil, por agregarle valor, mejorando o manteniendo su posición comercial ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-03 19:54:51',' Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE. ',25),(9,' Prueba 6 ',' Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE incluyen nuevas reglas que las empresas domiciliadas deben seguir para la deducción de gastos por servicios prestados por sus empresas relacionadas. Así, el usuario que pretenda deducir el gasto debe ahora satisfacer un “test de beneﬁcio”, que implica demostrar que el servicio le es útil, por agregarle valor, mejorando o manteniendo su posición comercial ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-03 19:59:35',' Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE. ',25),(10,' Prueba 7 ',' Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE incluyen nuevas reglas que las empresas domiciliadas deben seguir para la deducción de gastos por servicios prestados por sus empresas relacionadas. Así, el usuario que pretenda deducir el gasto debe ahora satisfacer un “test de beneﬁcio”, que implica demostrar que el servicio le es útil, por agregarle valor, mejorando o manteniendo su posición comercial ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-03 19:59:57',' Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE. ',25),(11,' Prueba 8 ',' Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE incluyen nuevas reglas que las empresas domiciliadas deben seguir para la deducción de gastos por servicios prestados por sus empresas relacionadas. Así, el usuario que pretenda deducir el gasto debe ahora satisfacer un “test de beneﬁcio”, que implica demostrar que el servicio le es útil, por agregarle valor, mejorando o manteniendo su posición comercial ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-03 20:02:58',' Las modificaciones introducidas por el Decreto Legislativo No. 1312 para adecuar nuestra legislación en materia de precios de transferencia a las recomendaciones de la OCDE. ',25),(12,' prueba real 1 ',' una breve descripcion ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:16:32',' un breve resumen ',24),(13,' titulo real 2 ',' dec ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:17:58',' 23 ',24),(14,'Prueba r3','Laesas doonadas. al',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:19:36','Las modificac  la OCDE.',25),(15,' un titulo cualquiera ',' de ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:23:51',' re ',24),(16,' titulo 5 ',' descr ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:31:10',' res ',24),(17,' aaaa ',' aaa ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:32:33',' aaa ',24),(18,' aaaa ',' aaa ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:36:32',' aaa ',24),(19,' prueba real 20 ',' a ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:37:48',' a ',24),(20,' asd ',' asd ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:39:00',' asd ',24),(21,' asd ',' asd ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:40:01',' asd ',24),(22,' t ',' t ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:40:37',' t ',24),(23,' d ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 00:41:52',' h ',24),(24,' t ',' t ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:02:32',' t ',24),(25,' a ',' a ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:07:15',' a ',24),(26,' sd ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:08:10',' d ',24),(27,' dd ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:08:46',' d ',24),(28,' Prueba real 1st ',' D ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:11:58',' r ',24),(29,' ads ',' das ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:14:10',' das ',24),(30,' d ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:15:01',' d ',24),(31,' d ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:16:57',' d ',24),(32,' a ',' a ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:21:44',' a ',24),(33,' ads ',' a ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:23:18',' a ',24),(34,' s ',' s ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:24:56',' s ',24),(35,' d ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:25:50',' d ',24),(36,' d ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:27:11',' d ',24),(37,' hh ',' hh ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:32:54',' h ',24),(38,' 5 ',' 5 ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:33:35',' 5 ',32),(39,' s ',' s ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:34:46',' s ',24),(40,' hh ',' hh ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:41:03',' hh ',24),(41,' d ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:48:37',' d ',24),(42,' f ',' f ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:49:33',' f ',24),(43,' r ',' r ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:50:57',' r ',24),(44,' d ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:52:55',' d ',24),(45,' y ',' y ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:55:15',' y ',24),(46,' u ',' u ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 01:56:11',' u ',24),(47,' o ',' o ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 02:05:14',' o ',24),(48,' r ',' r ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 02:06:12',' r ',24),(49,' prueba real 100 ',' prueba real 100 ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 02:10:49',' prueba real 100 ',24),(50,' nada ',' nada ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 02:15:33',' nada ',24),(51,' gg ',' gg ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-24 00:38:18',' gga ',30),(52,' nada2 ',' nada2 ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 02:45:38',' nada2 ',24),(53,' nada3 ',' nada3 ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 02:46:27',' nada3 ',24),(54,' hh ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 05:48:38',' d ',24),(55,' hh ',' d ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-04 05:48:55',' d ',24),(56,' Prueba con imagen ',' Prueba con imagen Prueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagen ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-06 23:53:47',' Prueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagenPrueba con imagen ',24),(57,' Pruebita v2 ',' Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2 ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-06 23:58:32',' Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2Pruebita v2 ',24),(59,' kkkkkkkkk ',' kkkkkkkkkkkkkkkkkkkkkkkkkkkkk ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-07 00:06:35',' kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk ',24),(60,' hhhhhhhhhhhhhh ',' hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-07 00:09:47',' hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh ',26),(61,' ttttttttttttttttt ',' tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-07 00:12:41',' ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt ',24),(62,'El éxito para tu Emprendimiento en el 2020: 6 cosas a tener en cuenta',' El éxito para tu Emprendimiento en el 2020 puede ser que dependa de muchas cosas y no quiero hacerte pensar que te puedo dar la «receta mágica» para garantizar el 100% del éxito de lo que sea que emprendas durante este nuevo año 2020.\n\nPero si existen una serie de cualidades que debes buscar que tu y tu emprendimiento tenga para que puedas aumentar las probabilidades de alcanzar los objetivos y posiblemente el éxito que te has propuesto alcanzar.\n\nLo que ven los Emprendedores para el Éxito de su Emprendimiento.\nNormalmente vemos que lo que las Emprendedoras y Emprendedores consideran que es lo más importante cuando inician un emprendimiento son: Una Gran Idea y contar con el Dinero para para financiar la creación de su negocio.\n\nEstos dos elementos (Idea de Negocio y Dinero) son elementos importantes, pero no los más importantes.\n\nEs claro que faltan otros elementos que son externos al Emprendedor, tales como El Mercado, encontrar el Público Objetivo que requiera un Producto o Servicio que realmente resuelva su problema y por el cual están dispuestos a pagar. Y posiblemente muchos otros elementos relacionados con el Negocio, Mercado u otros aspectos externos.\n\nPero detengámonos por un instante y pensemos si tomamos una Idea y la misma cantidad de Dinero y se lo damos a diez (10) personas, indicandoles que creen un negocio a partir de esa Idea utilizando todos una misma cantidad de dinero.\n\nAdemás todos tienen acceso al mismo Mercado y a la misma información relacionada con el Problema y la Solución requerida por dicho Mercado.\n\n¿Crees que las 10 personas obtendrán el mismo éxito en su negocio?\n\nDe seguro la respuesta es «No».\n\nY aun cuando existan muchos factores que inciden en este resultado, hay algo que hará esta diferencia y se llama «Capacidad de Ejecución». ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-07 00:26:41',' El éxito para tu Emprendimiento en el 2020 puede ser que dependa de muchas cosas y no quiero hacerte pensar que te puedo dar la «receta mágica» para garantizar el 100% del éxito de lo que sea que emprendas durante este nuevo año 2020. ',24),(63,' aaaaaaaaaaaaaaaaaaaaaaaaaa ',' aaaaaaaaaaaaaaaaaaaaaaaaaa ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-08 16:54:46',' aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ',24),(64,' o ',' o ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-22 16:32:46',' o ',24),(65,' op ',' o ',' http://www.dmtestudiojuridico.com/images/libros.png ','2020-01-22 16:33:13',' o ',24),(66,' Anthony Diaz ',' Anthony Diaz \nCArpio ',' https://www.kienyke.com/wp-content/uploads/2018/07/asesor.jpg ','2020-01-23 17:24:38',' Anthony Diaz \nCArpio ',27);
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (4,'Anthony','anthony.diaz2@unmsm.edu.pe','anthony123','2020-01-02 01:55:41');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-28 17:55:54
