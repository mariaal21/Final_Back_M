--Crear bd
-- CREATE DATABASE Montaña -- o user no se muy bien como se llama
-- WITH
-- OWNER = postgres
-- TABLESPACE = pg_default
-- CONNECTION LIMIT = -1
-- IS_TEMPLATE = False;

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


--Meter todos los datos en info
INSERT INTO info (user_id, tipo, localizacion, titulo, descripcion, nivel) 
VALUES (1, 'Clasica', 'La Cabrera', 'La Cabrera, Pico de la miel', 'Zona de escalada mayoritariamente de clásica.
Para el descenso se puede rapelar o se puede bajar andando por detrás,
 si se baja justo a la derecha del pico hay un pequeño destrepe, 
 que es mejor hacerlo por la izq (mirando hacia abajo) o si se va 
 con gente no experimentada o no se ve claro, por la derecha hay un cordino 
 del que se podría montar un pequeño descuelgue', 3);

INSERT INTO info (user_id, tipo, localizacion, titulo, descripcion, nivel) 
VALUES (1, 'Clasica', 'La pedriza', 'La Guirles-Campos al Yelmo', 'La inmensa mole 
granítica de la Peña del Yelmo es sin lugar a dudas la más renombrada y 
conocida de La Pedriza, bien visible casi desde cualquier punto, no sólo de 
nuestra sierra sino también desde las carreteras de acceso a la misma. 
El reto de recorrer en libre su cara sur por el mismo centro fue anhelado durante 
décadas por los entusiastas de la escalada.', 5);

INSERT INTO info (user_id, tipo, localizacion, titulo, descripcion, nivel) 
VALUES (1, 'Clasica', 'Parque Nacional de Guadarrama', 'La Fulgencio al Hueso','Se trata de una 
laja de granito de unos 80 metros de alto y unos 10 de ancho, apoyada sobre una 
placa lisa, tocándola solo por arriba. De esta forma entre las dos queda el hueco 
justo para que la imaginación de un escalador vuele a sus anchas. Se puede 
subir por el lomo, en adherencia dura, o pedaleando por el desplome, aprovechando una 
burilada eterna llamada Claveles Rojos. ', 5);

INSERT INTO info (user_id, tipo, localizacion, titulo, descripcion, nivel) 
VALUES (1, 'Deportiva', 'Peñalara', 'Pared del Zabala','La ruta cuenta con una longitud 
aproximada de 200 metros y tiene un desnivel de unos 150 metros. A lo 
largo del recorrido, los escaladores encontrarán diferentes pasos técnicos 
que van desde el cuarto al sexto grado de dificultad. La ruta también ofrece 
una vista impresionante de la Sierra de Guadarrama y el Embalse de Pinilla.', 2);


INSERT INTO info (user_id, tipo, localizacion, titulo, descripcion, nivel) 
VALUES (1, 'Deportiva', 'Torrelodones', 'La Fria','La Fría es una zona de escalada 
situada en Torrelodones, en la sierra de Guadarrama de la Comunidad de Madrid. 
Es conocida por ser una zona muy técnica y exigente, especialmente recomendada 
para escaladores con experiencia previa.
La zona cuenta con unas 60 vías de escalada que varían en dificultad desde el 
cuarto al noveno grado. La roca predominante es granito y las vías tienen una 
longitud media de 20 metros.', 4);

INSERT INTO info (user_id, tipo, localizacion, titulo, descripcion, nivel) 
VALUES (1, 'Deportiva', 'Zarzalejo', 'Plazoleta de Karmita ','La Plazoleta de Karmita 
es una zona de escalada situada en Zarzalejo, en la Sierra de Guadarrama de la 
Comunidad de Madrid. Es una zona muy popular entre los escaladores, especialmente 
para aquellos que están buscando vías de dificultad moderada y alta.
La zona cuenta con unas 50 vías de escalada que varían en dificultad desde el quinto 
hasta el noveno grado. Las rutas tienen una longitud media de unos 20 metros y 
están equipadas con anclajes fijos para la seguridad de los escaladores.
La roca predominante en la Plazoleta de Karmita es granito, lo que ofrece una 
superficie sólida y resistente para escalar. El entorno natural es impresionante, 
con vistas panorámicas de la Sierra de Guadarrama.', 4);


INSERT INTO info (user_id, tipo, localizacion, titulo, descripcion, nivel) 
VALUES (1, 'Boulder', 'La Pedriza', 'La Tortuga','La Tortuga es un sector de 
boulder ubicado en la zona de El Tolmo, en la parte baja de La Pedriza, una 
zona de escalada en la Sierra de Guadarrama en la Comunidad de Madrid. 
Este sector es muy popular entre los escaladores debido a la gran variedad de 
problemas de escalada que ofrece, con bloques de granito con formas redondeadas 
y lisas. Es un lugar accesible y frecuentado por escaladores de todos los niveles, 
y se encuentra en un entorno natural impresionante con vistas a las montañas 
circundantes.', 2);


INSERT INTO info (user_id, tipo, localizacion, titulo, descripcion, nivel) 
VALUES (1, 'Boulder', 'El Escorial', 'El Yelmo','El Yelmo es un lugar popular 
para la escalada en boulder en la Sierra de Guadarrama, cerca de El Escorial en 
la Comunidad de Madrid. Esta zona de escalada cuenta con una gran variedad de 
bloques de granito con diferentes niveles de dificultad para los escaladores de 
boulder, con más de 100 problemas de escalada que van desde los más sencillos 
hasta los más difíciles. La roca de granito del Yelmo es conocida por su textura 
rugosa y sus formas angulares, lo que la hace ideal para la escalada en boulder.', 3);

INSERT INTO info (user_id, tipo, localizacion, titulo, descripcion, nivel) 
VALUES (1, 'Boulder', 'Patones', 'El vellon',' El Vellón es una de las zonas 
de escalada en boulder más populares de la Comunidad de Madrid, ubicada en Patones,
en la Sierra de Guadarrama. Esta zona de escalada en boulder cuenta con más de 300 
problemas de escalada en bloques de granito, que van desde los más fáciles hasta 
los más difíciles, lo que la hace ideal para escaladores de todos los niveles.
Los bloques de granito en El Vellón tienen una textura rugosa y formas angulares, 
lo que supone un desafío técnico para los escaladores que buscan problemas exigentes. 
Además, la zona ofrece una gran variedad de bloques, desde los más pequeños y 
asequibles hasta los más grandes y desafiantes, lo que la hace perfecta para la 
escalada en boulder.', 3);


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
INSERT INTO users(name,email,password)
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


CREATE TABLE foro (
commentId serial NOT NULL PRIMARY KEY, 
name varchar(40) NOT NULL, 
comentario text,
fecha varchar(40) NOT NULL,
)
