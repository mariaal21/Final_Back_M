const {
    modelInsertComment, modelGetAllForo, modelDeleteForo
} = require ('../models/ForoModel')



/**
 * Obtiene todos los comentarios del foro.
 * @function
 * @async
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @throws {Object} Error en caso de que algo salga mal en la ejecución.
 */

const getAllForo = async (req, res) => {

    try {

        console.log("Hola")        

        const data = await modelGetAllForo();
        
        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else return res.status(400).json({
            ok: true,
            msg: 'No hay ningun tipo de comentario'
        });

       

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getAll.',
            error: e
        });

    };
};


/**
 * Inserta un comentario en el foro.
 * @function
 * @async
 * @param {Object} req - El objeto de solicitud con el cuerpo del comentario.
 * @param {Object} res - El objeto de respuesta.

 * @throws {Object} Error en caso de que algo salga mal en la ejecución.
 */

const Insertcomment = async ({ body }, res) => {

    try {

        const data = await modelInsertComment(body);

        if (data) return res.status(200).json({
            ok: true,
            data
        });

    } catch (e) {
        if (e.toString().includes('duplicate key value')) {

            let err = { email: {} };
            err.email.msg = 'el body no esta bien'

            return res.status(500).json({
                ok: false,
                errors: err
            });
        }

    };
};


/**
 * Elimina un comentario del foro.
 * @function
 * @async
 * @param {Object} req - El objeto de solicitud con el id del comentario a eliminar.
 * @param {Object} res - El objeto de respuesta.
 * @throws {Object} Error en caso de que algo salga mal en la ejecución.
 */
const deleteforo = async (req, res) => {
    try {
      const commentId = req.params.id;
      const deletedRows = await modelDeleteForo(commentId);
  
      if (deletedRows) {
        return res.status(200).json({
          ok: true,
          msg: `Se eliminó el comentario con ID ${commentId}`
        });
      } else {
        return res.status(404).json({
          ok: false,
          msg: `No se encontró el comentario con ID ${commentId}`
        });
      }
    } catch (e) {
      return res.status(500).json({
        ok: false,
        msg: 'Error en deleteforo.',
        error: e
      });
    }
  };
  
  



module.exports = {
    Insertcomment,
    getAllForo,
    deleteforo
}