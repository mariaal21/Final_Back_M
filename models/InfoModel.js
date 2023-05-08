const { Pool } = require('pg');
const {querisInfo}  = require('./queris');


const pool = new Pool({
    host: "horton.db.elephantsql.com",
    user: "eszyquqw",
    database: "eszyquqw" ,
    password:"m_MSzhvR-2Nc_GAAN9sieXm-11MWdpfv",
});


const modelGetBoulderAlone = async () => {

    let client, result;

    try {
        
        client = await pool.connect();
       
        const data = await client.query(querisInfo.getBoulderAlone)

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




const modelGetClasica = async (info_id) => {

    let client, result;

    try {
        
        client = await pool.connect();
       
        const data = await client.query(querisInfo.getClasica, [info_id]);

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



const modelGetBoulder = async (info_id) => {

    let client, result;

    try {
        
        client = await pool.connect();
       
        const data = await client.query(querisInfo.getBoulder, [info_id]);

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



const modelGetDeportivaAlone = async () => {

    let client, result;

    try {
        
        client = await pool.connect();
       
        const data = await client.query(querisInfo.getDeportivaAlone)

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



const modelGetDeportiva = async (info_id) => {

    let client, result;

    try {
        
        client = await pool.connect();
       
        const data = await client.query(querisInfo.getDeportiva, [info_id]);

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

const modelGetClasicaAlone = async () => {

    let client, result;

    try {
        
        client = await pool.connect();
       
        const data = await client.query(querisInfo.getClasicaAlone)

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




const modelGetAll = async () => {

    let client, result;

    try {
        
        client = await pool.connect();
       
        const data = await client.query(querisInfo.getAll)

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



  const modelgetLocalizacionInfo= async (localizacion) => {

    let client, result;
    console.log("hola")
    try {
        console.log("hola")
        client = await pool.connect();

        const data = await client.query(querisInfo.getLocalizazion, [localizacion])

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

        const data = await client.query(querisInfo. getLocalizazion, [tipo])

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
    modelGetBoulderAlone,
    modelGetClasica,
    modelGetDeportivaAlone,
    modelGetLocation,
    modelGetAllDatos,
    modelGetAll,
    modelgetLocalizacionInfo,
    modelGetClasicaAlone,
    modelGetBoulder,
    modelGetDeportiva
    
}


