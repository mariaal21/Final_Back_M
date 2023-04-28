--Crear bd
CREATE DATABASE Montaña -- o user no se muy bien como se llama
WITH
OWNER = postgres
TABLESPACE = pg_default
CONNECTION LIMIT = -1
IS_TEMPLATE = False;

--Crear tabla de users
CREATE TABLE users (
user_id serial NOT NULL PRIMARY KEY,
name varchar(45) NOT NULL,
email varchar(100) NOT NULL UNIQUE,
password varchar(200) NOT NULL
);

--Crear tabla de rols
CREATE TABLE rols (
rol_id serial NOT NULL PRIMARY KEY,
rol varchar(45) NOT NULL,
user_id int,
FOREIGN KEY (user_id) REFERENCES usuario(user_id)
);

--crear tabla de informacion 
CREATE TABLE info (
info_id serial NOT NULL PRIMARY KEY, 
user_id int, 
tipo varchar(20) NOT NULL,  --aqui va lo de escalada o el tipo que quieras hacer
localizacion varchar (45) NOT NULL, -- aqui va las que van dentro de tipo es unico
titulo varchar (45) NOT NULL, 
descripcion text,
nivel int, --mirar como se escribe para que sea solo number
-- calendar null --vacio pero el null tiene que tener algo delante para que pueda funcionar
FOREIGN KEY ( user_id) REFERENCES users(user_id)
)



--Crear table de favorites
CREATE TABLE favorites (
favorite_id serial NOT NULL PRIMARY KEY,
user_id int,
info_id int,
FOREIGN KEY (user_id) REFERENCES users(user_id)
FOREIGN KEY ( info_id) REFERENCES  information(info_id) -- de aqui cogo el id de la tabla grande
 -- para meterle el favorito entero
);

--Crear table de opinions
CREATE TABLE opinions (
opinion_id serial NOT NULL PRIMARY KEY,
opniones text,
FOREIGN KEY (user_id) REFERENCES users(user_id)

);

--Crear admin (password: admin, se guarda encriptado)
INSERT INTO usuario(name,email,password)
VALUES
('maria','maria@correo.es','admin123');

--Crear rol admin
INSERT INTO rols(rol,user_id)
VALUES
('admin',1);

--Crear resto usuarios (password: user123)
INSERT INTO usuario(name,email,password) --se debe hacer con bcrypt
VALUES
('paula','paula@correo.es','user123'),
('saul','saul@correo.es','user123')


--Crear resto rolers users
INSERT INTO rols(rol,user_id)
VALUES
('user',2),
('user',3)