
## Para inicializar el proyecto:

    - Descargarte tanto el repositorio del Back como el del front con el enlace del respositorio
    Front: https://github.com/mariaal21/Fron_Final_M.git
    Back: https://github.com/mariaal21/Final_Back_M.git

    - Instalar todas las dependencias y las librerias utilizadas
    npm install 

    - En ambos repositorios iniciar el programa con npm start


## End Points 

    - Foro
        - Get all foro (.get)
        * http://localhost:4500/api/foro

        - Añdir un comentario al foro (.post)
        * http://localhost:4500/api/foro

         - eliminar un comnetario (.delete)
        * http://localhost:4500/api/foro/:id

          - update un comnetario (.put)
        * http://localhost:4500/api/foro/:id




    - Tabla de informacion
        - Get all info (.get)
        * http://localhost:4500/api/routes

        - Buscar dentro de la tabla solo las de tipo boulder (.get)
        * http://localhost:4500/api/routes/boulder

        - Buscar dentro de la tabla solo las de tipo clasica (.get)
        * http://localhost:4500/api/routes/clasica

        - Buscar dentro de la tabla solo las de tipo deportiva (.get)
        * http://localhost:4500/api/routes/deportiva

        - obtener dentro de boulder una unica entrada con todo (.get)
        * http://localhost:4500/api/routes/boulder/:id

        - en vez de buscar directamente, buscas dentro del tipo (.get)
        * http://localhost:4500/api/routes/localizacion/:localizacion

        - Buscar dentro de clasica una unica entrada con todo (.get)
        * http://localhost:4500/api/routes/clasica/:id

        - Buscar dentro de deportiva una unica entrada con todo (.get)
        * http://localhost:4500/api/routes/deportiva/:id

        - Buscar la descripcion sin clasificar (.get)
        * http://localhost:4500/api/routes/descripcion


    
     - Tabla de Calendario

        - Get all calendar (.get)
        * http://localhost:4500/api/calendar

        - Añdir una fecha al foro (.post)
        * http://localhost:4500/api/calendar

         - eliminar una fecha (.delete)
        * http://localhost:4500/api/calendar/:id


## Rutas dentro de la app

    - Rutas 
        * index (/)
        * rutas donde estan los tipos (/rutas)
        * foro (/foro)
        * contacto (/contacto)
        * login (/login)
        * administrador (/admin-dashboard)


## Contraseñas 

    user1:
        *email: paula@correo.es
        *contraseña : (User12345)

    user2:
        *email: saul@correo.es
        *contraseña : (User12345)

    admin:
        *email: maria@maria.es
        *contraseña : (User12345)
    