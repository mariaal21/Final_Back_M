const { Pool } = require('pg');
const {querisInfo}  = require('./queris');


const pool = new Pool({
    host: "horton.db.elephantsql.com",
    user: "eszyquqw",
    database: "eszyquqw" ,
    password:"m_MSzhvR-2Nc_GAAN9sieXm-11MWdpfv",
});


const modelGetTipo = async () => {

    let client, result;

    try {
        
        client = await pool.connect();
       
        const data = await client.query(querisInfo.getTipo)

        console.log(data)
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

// console.log(info)


const modelGetLocation = async () => {

    let client, result;

    try {
        
        client = await pool.connect();

        const data = await client.query(querisInfo. getTipoandLocation)

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


const modelGetAllDatos = async (tipo) => {

    let client, result;

    try {
        
        client = await pool.connect();

        const data = await client.query(querisInfo. getAlldatos, [tipo])

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

module.exports = {
    modelGetTipo,
    modelGetLocation,
    modelGetAllDatos
}


