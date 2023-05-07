const { Pool } = require('pg');

const pool = new Pool({
    host: "horton.db.elephantsql.com",
    user: "eszyquqw",
    database: "eszyquqw" ,
    password:"m_MSzhvR-2Nc_GAAN9sieXm-11MWdpfv",
});



console.log(Pool)

const { queriesCalendar } = require('./queris');




const modelGetAllCalendar = async () => {

    let client, result;

    try {
        
        client = await pool.connect();
       
        const data = await client.query(queriesCalendar.getAllCalendario)

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



const modelInsertCalendar = async ({ nombre, ruta, personas,fecha }) => {

    let client, result;
    try {

        client = await pool.connect();

        const data = await client.query(queriesCalendar.InsertarCalendario, [nombre, ruta, personas,fecha]);

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



const modelDeleteCalendar = async (id) => {
    let client, result;
  
    try {
      client = await pool.connect();
  
      const query = 'DELETE FROM calendar WHERE id = $1';
      const values = [id];
      const data = await client.query(query, values);
  
      if (data.rowCount !== 0) {
        result = true;
      } else {
        result = false;
      }
    } catch (e) {
      throw e;
    } finally {
      client.release();
    }
  
    return result;
  };
  


module.exports = {
    modelGetAllCalendar,
    modelInsertCalendar,
    modelDeleteCalendar
}