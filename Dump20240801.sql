CREATE DATABASE  IF NOT EXISTS `user_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `user_management`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: user_management
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `refacciones`
--

DROP TABLE IF EXISTS `refacciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refacciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_refaccion` varchar(100) NOT NULL,
  `descripcion` text,
  `cantidad` int NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `proveedor` varchar(100) DEFAULT NULL,
  `fecha_agregado` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refacciones`
--

LOCK TABLES `refacciones` WRITE;
/*!40000 ALTER TABLE `refacciones` DISABLE KEYS */;
INSERT INTO `refacciones` VALUES (1,'Filtro de aire','Filtro de aire para el modelo X',50,25.99,'Proveedor A','2024-07-08'),(2,'Bujía','Bujía de encendido para el modelo Y',200,15.50,'Proveedor B','2024-07-08'),(3,'Aceite de motor','Aceite sintético 10W-30',150,35.00,'Proveedor C','2024-07-08'),(4,'Correa de distribución','Correa de distribución para el modelo Z',75,45.99,'Proveedor D','2024-07-08'),(5,'Filtro de combustible','Filtro de combustible para el modelo A',100,20.75,'Proveedor E','2024-07-08'),(6,'Batería','Batería de 12V 60Ah',30,85.00,'Proveedor F','2024-07-08'),(7,'Pastillas de freno','Pastillas de freno para el modelo B',120,55.50,'Proveedor G','2024-07-08'),(8,'Amortiguador','Amortiguador delantero para el modelo C',60,75.25,'Proveedor H','2024-07-08'),(9,'Radiador','Radiador de aluminio para el modelo D',40,150.00,'Proveedor I','2024-07-08'),(10,'Embrague','Kit de embrague para el modelo E',25,120.99,'Proveedor J','2024-07-08'),(11,'Filtro de aceite','Filtro de aceite para el modelo F',110,10.50,'Proveedor K','2024-07-08'),(12,'Alternador','Alternador para el modelo G',20,130.75,'Proveedor L','2024-07-08'),(13,'Termostato','Termostato para el modelo H',80,22.99,'Proveedor M','2024-07-08'),(14,'Bomba de agua','Bomba de agua para el modelo I',55,65.50,'Proveedor N','2024-07-08'),(15,'Sensor de oxígeno','Sensor de oxígeno para el modelo J',90,40.99,'Proveedor O','2024-07-08'),(16,'Válvula EGR','Válvula EGR para el modelo K',45,60.00,'Proveedor P','2024-07-08'),(17,'Bobina de encendido','Bobina de encendido para el modelo L',70,25.75,'Proveedor Q','2024-07-08'),(18,'Caja de cambios','Caja de cambios manual para el modelo M',15,500.00,'Proveedor R','2024-07-08'),(19,'Disco de freno','Disco de freno para el modelo N',65,30.50,'Proveedor S','2024-07-08'),(20,'Parabrisas','Parabrisas delantero para el modelo O',10,250.00,'Proveedor T','2024-07-08');
/*!40000 ALTER TABLE `refacciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','normal') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin_user','admin_password','admin'),(2,'normal_user','normal_password','normal'),(3,'Arturo123','Arturito123','normal'),(4,'Jorge','Jorjais-12','normal'),(5,'Jesus','Jesus-12','normal');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'user_management'
--

--
-- Dumping routines for database 'user_management'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-01 19:27:59
