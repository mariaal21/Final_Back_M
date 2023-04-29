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
    getTipo: `SELECT tipo FROM public.info;`,

    getTipoandLocation: `SELECT tipo, localizacion FROM public.info;`,

    getAlldatos: `SELECT titulo, descripcion, nivel, localizacion
    FROM public.info
    WHERE tipo = $1;` // o la que quieras 
    
}



module.exports = {
    queriesUser,
    queriesRol,
    querisInfo
} 