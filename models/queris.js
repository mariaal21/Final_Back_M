const queriesUser = {
        getUsers: `SELECT user_id, name, email
                FROM users;`,

        // getUsers: `SELECT * FROM users;`,

        getUserByEmail: `SELECT user_id, name, email
                    FROM users
                    WHERE email=$1;`,

        getUserPassByEmail: `SELECT u.user_id, u.password, u.name, r.rol
                    FROM users AS u
                    INNER JOIN rols AS r
                    ON u.user_id=r.user_id
                    WHERE email=$1;`,

        createUser: `INSERT INTO users (name, email, password)
                    VALUES ($1, $2, $3)
                    RETURNING user_id, name, email;`,

        changePassByEmail: `UPDATE users
                        SET password=$1
                        WHERE email=$2;`
};


const queriesRol = {
        insertRol: `INSERT INTO rols (user_id, rol)
                VALUES ($1, $2);`,

        getRol: `SELECT rol
                FROM rols
                WHERE user_id=$1;`
};


const querisInfo = {

        getAll: `SELECT * FROM info`,

        // getTipo: `SELECT tipo FROM public.info;`,

        getBoulderAlone: `SELECT info_id, localizacion 
            FROM info 
            WHERE tipo = 'Boulder' ;`,

        getBoulder: `SELECT localizacion, titulo, descripcion, nivel
            FROM info 
            WHERE tipo = 'Boulder' 
            AND info_id = $1 ;`,


        getClasica: `SELECT  localizacion, titulo, descripcion, nivel
            FROM info 
            WHERE tipo = 'Clasica'
            AND info_id = $1 ;`,


        getClasicaAlone: `SELECT info_id, localizacion 
            FROM info 
            WHERE tipo = 'Clasica' ;`,

        getDeportivaAlone: `SELECT info_id, localizacion 
            FROM info 
            WHERE tipo = 'Deportiva' ;`,

        getDeportiva: `SELECT  localizacion, titulo, descripcion, nivel
            FROM info 
            WHERE tipo = 'Deportiva'
            AND info_id = $1 ;`,
        

        getDatos: ` SELECT titulo, descripcion, nivel
                FROM info
                WHERE localizacion = $1;`,


        getLocalizazion: `SELECT localizacion 
            FROM info 
            WHERE tipo = $1;`,

        getTipoandLocation: `SELECT tipo, localizacion FROM public.info;`,

        getAlldatos: `SELECT titulo, descripcion, nivel, localizacion
    FROM public.info
    WHERE tipo = $1;`, // o la que quieras 

}

const queriesForo = {

        InsertarDatos: `INSERT INTO foro (name, comentario, fecha)
                VALUES ($1, $2, $3)
                RETURNING commentId, name, comentario, fecha`,
        getAllForo: `SELECT * FROM foro`,

        deleteForo: `DELETE FROM foro WHERE commentId = $1`

}

const queriesCalendar = {

        InsertarCalendario: `INSERT INTO calendar (nombre, ruta, personas,fecha)
                VALUES ($1, $2, $3, $4)
                RETURNING id, nombre, ruta,personas ,fecha`,


        getAllCalendario: `SELECT * FROM calendar`,

        deleteForo: `DELETE FROM calendar WHERE id = $1`



}


module.exports = {
        queriesUser,
        queriesRol,
        querisInfo,
        queriesForo,
        queriesCalendar
}

