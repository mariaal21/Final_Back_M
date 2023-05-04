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
    
        getBoulder: `SELECT localizacion 
                FROM info 
                WHERE tipo = 'Boulder' ;`,
    
        getClasica: `SELECT  localizacion, titulo, descripcion, nivel
                FROM info 
                WHERE tipo = 'Clasica'
                AND info_id = $1 ;`,
    
    
        getClasicaAlone: `SELECT info_id, localizacion 
                FROM info 
                WHERE tipo = 'Clasica' ;`,
    
        getDeportiva: `SELECT localizacion 
                FROM info 
                WHERE tipo = 'Deportiva' ;`,
    
        getDatos : ` SELECT titulo, descripcion, nivel
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
    

 const queriesForo ={

        InsertarDatos:`INSERT INTO foro (nombre, comentario, fecha)
                VALUES ($1, $2, $3)
                RETURNING commentId, nombre, comentario, fecha`,
        getAllForo : `SELECT * FROM foro`

}

module.exports = {
    queriesUser,
    queriesRol,
    querisInfo,
    queriesForo
} 

