-- Insertar datos en la tabla gestores
INSERT INTO gestores (nombre, password) VALUES
    ('Gestor1', 'password1'),
    ('Gestor2', 'password2');

-- Insertar datos en la tabla clientes
INSERT INTO clientes (nombre, cuit, direccion, localidad, provincia, contacto, nombrecontacto, id_gestor) VALUES
    ('Cliente1', 123456789, 'Dirección1', 'Localidad1', 'Provincia1', 111222333, 'Contacto1', 1),
    ('Cliente2', 987654321, 'Dirección2', 'Localidad2', 'Provincia2', 444555666, 'Contacto2', 2);

-- Insertar datos en la tabla concesionario
INSERT INTO concesionario (nombre, provincia, cuit, contacto, password) VALUES
    ('Concesionario1', 'ProvinciaA', 11111111, 777888999, 'passwordA'),
    ('Concesionario2', 'ProvinciaB', 22222222, 888777999, 'passwordB');

-- Insertar datos en la tabla vehiculo
INSERT INTO vehiculo (dominio, anio, modelo, id_cliente, id_concesionario) VALUES
    ('ABC123', 2020, 'Modelo1', 1, 1),
    ('XYZ789', 2019, 'Modelo2', 2, 2);



-- Insertar datos en la tabla tickets
INSERT INTO tickets (id_concesionario, numero_servicio, createdAt, deletedAt, updatedAt, fecha_turno, proveedor_service, presupuesto, reparaciones, estado_ticket, observaciones, factura, id_gestor, id_vehiculo) VALUES
    (1, 1, NOW(), NOW(), NOW(), NOW(), 'Proveedor1', 500.00, 'Reparación1', 'En proceso', 'Observaciones1', 'Factura1', 1, 1),
    (2, 2, NOW(), NOW(), NOW(), NOW(), 'Proveedor2', 700.00, 'Reparación2', 'Completado', 'Observaciones2', 'Factura2', 2, 2);
