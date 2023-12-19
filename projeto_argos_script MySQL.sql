SELECT * FROM projeto_argos.equipamentos;

CREATE TABLE equipamentos (
  `id` INT NOT NULL AUTO_INCREMENT,
  `placa` VARCHAR(45) NOT NULL,
  `modelo` VARCHAR(45) NOT NULL,
  `ano` INT NOT NULL,
  PRIMARY KEY (`id`));
