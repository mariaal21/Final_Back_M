const { Pool } = require('pg');
const bcrypt = require('bcryptjs');


const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "Montaña" ,
    password:"admin",
});


// console.log(pool)

const {
    queriesUser,
    queriesRol } = require('./queris');

    // const { connect } = require('../routers/RoutersUser');


const modelGetUsers = async () => {

    let client, result;

    try {
        
        client = await pool.connect();

        const data = await client.query(queriesUser.getUsers)

        if (data.rowCount !== 0) {
            result = data.rows;
          } else {
            result = false;
          }

    } catch (e) {
        throw e;

    } finally {
        client.release();

    };

    return result;
};

// console.log(pool.connect())


const modelGetUserByEmail = async (email) => {

    let client, result;
    try {

        client = await pool.connect();

        const data = await client.query(queriesUser.getUserByEmail, [email])

        if (data.rowCount !== 0) {
            result = data.rows;
          } else {
            result = false;
          }

    } catch (e) {
        throw e;

    } finally {
        client.release();

    };

    return result;
};


const modelCreateUser = async ({ name, email, password }) => {

    let client, result;
    try {

        client = await pool.connect();

        // const salt = bcrypt.genSaltSync(10);

        // password = bcrypt.hashSync(password, salt);

        const data = await client.query(queriesUser.createUser, [name, email, password]);

        await client.query(queriesRol.insertRol, [data.rows[0].user_id, 'user']);

        if (data.rowCount !== 0) {
            result = data.rows;
          } else {
            result = false;
          }

    } catch (e) {
        throw e;

    } finally {
        client.release();

    };

    return result;
};


const modelLoginUser = async ({ email, password }) => {

    let client, result, isPassOK;
    try {

        client = await pool.connect();

        const data = await client.query(queriesUser.getUserPassByEmail, [email]);

        if (data.rowCount !== 0) {
            result = data.rows;
          } else {
            result = false;
          }


        if (result) {
            isPassOK = bcrypt.compareSync(password, result.password);

        }

    } catch (e) {
        throw e;

    } finally {
        client.release();

    };

    return { result, isPassOK };
};


const modelChangePassword = async ({ email, oldPassword, newPassword }) => {

    let client, result, isPassOK;
    try {

        client = await pool.connect();

        const data = await client.query(queriesUser.getUserPassByEmail, [email]);

        if (data.rowCount !== 0) {
            result = data.rows;
          } else {
            result = false;
          }

        if (result) {

            isPassOK = bcrypt.compareSync(oldPassword, result.password);

            if (isPassOK) {
                const salt = bcrypt.genSaltSync(10);
                newPassword = bcrypt.hashSync(newPassword, salt);

                const dataPass = await client.query(queriesUser.changePassByEmail, [newPassword, email]);
            }


        }

    } catch (e) {
        throw e;

    } finally {
        client.release();

    };

    return { result, isPassOK };
};



//este no se 
const modelLogoutUser = async ({ email }) => {

    let client;
    try {

        client = await pool.connect();

       

    } catch (e) {
        throw e;

    } finally {
        client.release();

    };
};


module.exports = {
    modelGetUsers,
    modelGetUserByEmail,
    modelCreateUser,
    modelLoginUser,
    modelChangePassword,
    modelLogoutUser
}