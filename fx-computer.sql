-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.20-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla qbcorevue.fx_assignment
CREATE TABLE IF NOT EXISTS `fx_assignment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `caseid` varchar(20) NOT NULL,
  `localization` varchar(20) NOT NULL,
  `coordinates` text DEFAULT NULL,
  `citizenid` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `callsign` varchar(50) NOT NULL,
  PRIMARY KEY (`caseid`),
  UNIQUE KEY `caseid` (`caseid`),
  KEY `citizenid` (`citizenid`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=143 DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla qbcorevue.fx_reports
CREATE TABLE IF NOT EXISTS `fx_reports` (
  `algo` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(255) NOT NULL DEFAULT '',
  `title` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `citizenid` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `coords` text DEFAULT NULL,
  `observations` text DEFAULT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '{"polices":[],"fines":[],"evidences":[]}',
  `amount` smallint(6) DEFAULT 0,
  `type` varchar(20) NOT NULL DEFAULT 'basic',
  `taked` int(1) DEFAULT 0,
  `callsign` varchar(50) DEFAULT '""',
  PRIMARY KEY (`algo`),
  KEY `id` (`id`),
  KEY `citizenid` (`citizenid`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
