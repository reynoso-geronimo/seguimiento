CREATE DATABASE SEGUIMIENTO;
USE SEGUIMIENTO;
CREATE TABLE `gestores`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);
CREATE TABLE `clientes`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255) NOT NULL,
    `cuit` INT UNSIGNED NOT NULL,
    `direccion` VARCHAR(255) NOT NULL,
    `localidad` VARCHAR(255) NOT NULL,
    `provincia` VARCHAR(255) NOT NULL,
    `contacto` INT NOT NULL,
    `nombrecontacto` VARCHAR(255) NOT NULL,
    `id_gestor` BIGINT UNSIGNED NOT NULL
);
CREATE TABLE `vehiculo`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `dominio` VARCHAR(255) NOT NULL,
    `anio` INT NOT NULL,
    `modelo` VARCHAR(255) NOT NULL,
    `id_cliente` BIGINT UNSIGNED NOT NULL,
    `id_concesionario` BIGINT UNSIGNED NOT NULL
    
);
CREATE TABLE `concesionario`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255) NOT NULL,
    `provincia` VARCHAR(255) NOT NULL,
    `cuit` INT NOT NULL,
    `contacto` BIGINT NOT NULL,
    `password` VARCHAR(255) NOT NULL
);
CREATE TABLE `tickets`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_concesionario` BIGINT UNSIGNED NOT NULL,
    `numero_servicio` TINYINT UNSIGNED NOT NULL,
    `createdAt` DATETIME NOT NULL,
    `deletedAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    `fecha_turno` DATETIME NOT NULL,
    `proveedor_service` VARCHAR(255) NOT NULL,
    `presupuesto` DOUBLE(8, 2) NOT NULL,
    `reparaciones` VARCHAR(255) NOT NULL,
    `estado_ticket` VARCHAR(255) NOT NULL,
    `observaciones` VARCHAR(255) NOT NULL,
    `factura` VARCHAR(255) NOT NULL,
    `id_gestor` BIGINT UNSIGNED NOT NULL,
    `id_vehiculo` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE
    `vehiculo` ADD CONSTRAINT `vehiculo_id_concesionario_foreign` FOREIGN KEY(`id_concesionario`) REFERENCES `concesionario`(`id`);
ALTER TABLE
    `vehiculo` ADD CONSTRAINT `vehiculo_id_clientes_foreign` FOREIGN KEY(`id_cliente`) REFERENCES `clientes`(`id`);
ALTER TABLE
    `tickets` ADD CONSTRAINT `tickets_id_gestor_foreign` FOREIGN KEY(`id_gestor`) REFERENCES `gestores`(`id`);
ALTER TABLE
    `tickets` ADD CONSTRAINT `tickets_id_vehiculo_foreign` FOREIGN KEY(`id_vehiculo`) REFERENCES `vehiculo`(`id`);
ALTER TABLE
    `clientes` ADD CONSTRAINT `clientes_id_gestor_foreign` FOREIGN KEY(`id_gestor`) REFERENCES `gestores`(`id`);