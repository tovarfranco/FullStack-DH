CREATE DATABASE `notasDB` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

/*---------------------------------------------------------------------------*/

USE notasDB;

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `notasDB`.`usuarios`
(`id_usuario`, `nombre`, `email`)
VALUES
(default, 'Alan', 'alan@gmail.com'),
(default, 'Franco', 'franco@gmail.com'),
(default, 'Mauro', 'mauro@gmail.com'),
(default, 'Leandro', 'leandro@gmail.com'),
(default, 'Marina', 'marina@gmail.com'),
(default, 'Victoria', 'victoria@gmail.com'),
(default, 'Matias', 'matias@gmail.com'),
(default, 'Daniela', 'daniela@gmail.com'),
(default, 'Oscar', 'oscar@gmail.com'),
(default, 'Sandra', 'sandra@gmail.com');

/*---------------------------------------------------------------------------*/

CREATE TABLE `estados` (
  `id_estado` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(45) NOT NULL,
  PRIMARY KEY (`id_estado`),
  UNIQUE KEY `estado_UNIQUE` (`estado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `notasdb`.`estados`
(`id_estado`,
`estado`)
VALUES
(default, 'creada'),
(default, 'modificada'),
(default, 'eliminada');

/*---------------------------------------------------------------------------*/

CREATE TABLE `notas` (
  `id_nota` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `permite_eliminar` tinyint NOT NULL,
  `id_usuario` int NOT NULL,
  `id_estado` int NOT NULL,
  PRIMARY KEY (`id_nota`),
  KEY `fk_id_usuario_idx` (`id_usuario`),
  KEY `fk_id_estado_idx` (`id_estado`),
  CONSTRAINT `fk_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON UPDATE CASCADE,
  CONSTRAINT `fk_id_estado` FOREIGN KEY (`id_estado`) REFERENCES `estados` (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `notasDB`.`notas`
(`id_nota`,
`titulo`,
`descripcion`,
`fecha_creacion`,
`fecha_modificacion`,
`permite_eliminar`,
`id_estado`,
`id_usuario`)
VALUES
(default, 'TEXTO_1', 'Esto es un TEXTO_1', now(), null, 1, 1, 1),
(default, 'TEXTO_2', 'Esto es un TEXTO_2', now(), null, 0, 1,2),
(default, 'TEXTO_3', 'Esto es un TEXTO_3', now(), null, 1, 1, 3),
(default, 'TEXTO_4', 'Esto es un TEXTO_4', now(), null, 0, 1, 4),
(default, 'TEXTO_5', 'Esto es un TEXTO_5', now(), null, 1, 1, 5),
(default, 'TEXTO_6', 'Esto es un TEXTO_6', now(), null, 0, 1, 6),
(default, 'TEXTO_7', 'Esto es un TEXTO_7', now(), null, 1, 1, 7),
(default, 'TEXTO_8', 'Esto es un TEXTO_8', now(), null, 0, 1, 8),
(default, 'TEXTO_9', 'Esto es un TEXTO_9', now(), null, 1, 1, 9),
(default, 'TEXTO_10', 'Esto es un TEXTO_10', now(), null, 0, 1, 10);

/*---------------------------------------------------------------------------*/

CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) NOT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `categoria_UNIQUE` (`categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `notasDB`.`categorias`
(`id_categoria`, `categoria`)
VALUES
(default, 'musica'),
(default, 'tareas'),
(default, 'libros'),
(default, 'estudio'),
(default, 'noticias'),
(default, 'viajes'),
(default, 'clima'),
(default, 'negocios'),
(default, 'deporte'),
(default, 'cocina');

/*---------------------------------------------------------------------------*/

CREATE TABLE `notas_categorias` (
  `id_nota` int NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_nota`,`id_categoria`),
  KEY `fk_notas_categorias_categorias_idx` (`id_categoria`),
  CONSTRAINT `fk_notas_categorias_categorias` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`),
  CONSTRAINT `fk_notas_categorias_notas` FOREIGN KEY (`id_nota`) REFERENCES `notas` (`id_nota`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `notasDB`.`notas_categorias`
(`id_nota`, `id_categoria`)
VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 3),
(3, 4);