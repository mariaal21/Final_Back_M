const {
    modelGetAllCalendar,
    modelInsertCalendar,
    modelDeleteCalendar
} = require ('../models/CalendarModel')


/**
 * Retorna todos los datos del calendario.
 *
 * @async
 * @function
 * @param {Object} req - El objeto request de Express.
 * @param {Object} res - El objeto response de Express.
 * @returns {Promise} Una promesa que resuelve en un objeto JSON con la respuesta.
 *
 * @throws {Object} Un objeto de error con el mensaje de error y detalles adicionales.
 *
 * @example
 * getAllCalendar(req, res);
 */

const getAllCalendar = async (req, res) => {

    try {

        console.log("Hola")        

        const data = await modelGetAllCalendar();
        
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
 * Inserta un nuevo comentario en el calendario.
 * @param {Object} req - El objeto Request de Express.
 * @param {Object} req.body - El objeto que contiene los datos del comentario.
 * @param {Object} res - El objeto Response de Express.
 * @throws {Object} - Un objeto JSON con el error de inserción en caso de que falle.
 */

const InsertcommentCalendar = async ({ body }, res) => {

    try {

        const data = await modelInsertCalendar(body);

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
 * Elimina un calendario por ID.
 *
 * @param {Object} req - El objeto request de Express.
 * @param {Object} req.params - Los parámetros de la URL, incluyendo el ID del calendario a eliminar.
 * @param {string} req.params.id - El ID del calendario a eliminar.
 * @param {Object} res - El objeto response de Express.
 * @returns {Promise<void>} - No devuelve ningún valor explícito, pero envía una respuesta al cliente.
 * @throws {Object} - Devuelve un objeto con información sobre el error en caso de que se produzca uno.
 * @throws {Error} - Devuelve un objeto de error genérico en caso de que se produzca un error no previsto.
 *
 * @example
 * // Request
 * // DELETE /calendar/1234
 *
 * deletecalendar(req, res);
 */

const deletecalendar = async (req, res) => {
    try {
      const id = req.params.id;
      const deletedRows = await modelDeleteCalendar(id);
  
      if (deletedRows) {
        return res.status(200).json({
          ok: true,
          msg: `Se eliminó el calendario con ID ${id}`
        });
      } else {
        return res.status(404).json({
          ok: false,
          msg: `No se encontró el calendario con ID ${id}`
        });
      }
    } catch (e) {
      return res.status(500).json({
        ok: false,
        msg: 'Error en deletecalendar.',
        error: e
      });
    }
  };


module.exports = {
    InsertcommentCalendar,
    getAllCalendar,
    deletecalendar
}