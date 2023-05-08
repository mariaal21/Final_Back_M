const { Pool } = require('pg');

const pool = new Pool({
    host: "horton.db.elephantsql.com",
    user: "eszyquqw",
    database: "eszyquqw" ,
    password:"m_MSzhvR-2Nc_GAAN9sieXm-11MWdpfv",
});



console.log(Pool)

const { queriesForo } = require('./queris');




const modelGetAllForo = async () => {

    let client, result;

    try {
        
        client = await pool.connect();
       
        const data = await client.query(queriesForo.getAllForo)

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



const modelInsertComment = async ({ name, comentario, fecha }) => {

    let client, result;
    try {

        client = await pool.connect();

        const data = await client.query(queriesForo.InsertarDatos, [name, comentario, fecha]);

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


const modelDeleteForo = async (commentId) => {
    let client, result;
  
    try {
      client = await pool.connect();
  
      const query = 'DELETE FROM foro WHERE commentId = $1';
      const values = [commentId];
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
    modelInsertComment,
    modelGetAllForo,
    modelDeleteForo
}