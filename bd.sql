-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.6.17 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para sr_pizza

USE `db580080117`;


-- Volcando estructura para tabla sr_pizza.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id_c` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  PRIMARY KEY (`id_c`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla sr_pizza.clientes: ~2 rows (aproximadamente)
DELETE FROM `clientes`;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` (`id_c`, `nombre`, `direccion`, `telefono`) VALUES
	(1, 'Porfirio Eduardo Tabasco Jimenez', 'Calle 48B entre 51 y 53 col. Sisal', '9861000113'),
	(2, 'Estefania Hoil', 'Calle 48A', '9851054356'),
	(3, 'Zazil Hoil Aviles', 'Calle 45', '9851000000');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;


-- Volcando estructura para tabla sr_pizza.ingredientes
CREATE TABLE IF NOT EXISTS `ingredientes` (
  `id_ingrediente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_ingrediente`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla sr_pizza.ingredientes: ~0 rows (aproximadamente)
DELETE FROM `ingredientes`;
/*!40000 ALTER TABLE `ingredientes` DISABLE KEYS */;
INSERT INTO `ingredientes` (`id_ingrediente`, `nombre`) VALUES
	(1, 'Jamon'),
	(2, 'Pimiento'),
	(3, 'Cebolla');
/*!40000 ALTER TABLE `ingredientes` ENABLE KEYS */;


-- Volcando estructura para tabla sr_pizza.paquetes
CREATE TABLE IF NOT EXISTS `paquetes` (
  `id_paquete` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `contenido` varchar(200) DEFAULT NULL,
  `precio` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_paquete`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla sr_pizza.paquetes: ~2 rows (aproximadamente)
DELETE FROM `paquetes`;
/*!40000 ALTER TABLE `paquetes` DISABLE KEYS */;
INSERT INTO `paquetes` (`id_paquete`, `nombre`, `contenido`, `precio`) VALUES
	(4, 'Big 3', '2 Pizzas Jumbo con Pastor', '250'),
	(6, 'Sr Pizza', '1 Pizza Grande con Orilla de Queso extra peperoni', '100');
/*!40000 ALTER TABLE `paquetes` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
