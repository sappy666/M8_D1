create database roomates_db;
DROP TABLE IF EXISTS roomates;


CREATE TABLE roomates (
	id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    debe DECIMAL(5, 3),
    recibe DECIMAL(5, 3)
);

SELECT * from roomates; 

INSERT INTO roomates VALUES 
(1,'Mónica', 15.000, 5.000),
(2,'Helena', 23.000, 0.000),
(3,'Jacinta', 0.000, 38.000),
(4, 'Kila', 50.000, 0),
(5, 'Luffy', 60.000, 2.000);

DELETE FROM roomates where id = 1;

UPDATE roomates 
SET nombre = 'Canela', debe = 20.000, recibe = 10.000
WHERE id = 3;

DROP TABLE IF EXISTS gastos;

CREATE TABLE gastos (
	nombre varchar (50),
	descripción varchar(255),
	monto decimal (5,3)
);

INSERT INTO gastos VALUES 
('Helena', 'Comida alacena', 15.000),
('Luffy', 'Artículos baño', 12.000),
('Kila', 'Huesitos', 15.000);

SELECT * FROM gastos;

UPDATE gastos 
SET nombre = 'Luffy', descripción = 'cubrecamas', monto = '25.000' WHERE nombre = 'Luffy';

DELETE FROM gastos WHERE nombre = 'Helena';