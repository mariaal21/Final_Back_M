const {
    modelGetBoulderAlone,
    modelGetLocation,
    modelGetAllDatos, 
modelGetAll,
modelGetClasica,
modelGetDeportivaAlone,
modelgetLocalizacionInfo,
modelGetClasicaAlone,
modelGetBoulder,
modelGetDeportiva } = require('../models/InfoModel')


/**
 * @function GetBoulderAlone
 * @description Función asincrónica que devuelve los datos de la escalada en solitario Boulder.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @throws {Object} Objeto JSON con mensaje de error si ocurre un error en la operación.
 * @async
 * @example
 * const data = await GetBoulderAlone(req, res);
 */

const GetBoulderAlone = async (req, res) => {

    try {

        console.log("Hola")        

        const data = await modelGetBoulderAlone();
        
        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else return res.status(400).json({
            ok: true,
            msg: 'No hay ningun tipo de escalada'
        });

       

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getTipo.',
            error: e
        });

    };
};



/**
 * @function GetClasicaAlone
 * @description Función asincrónica que devuelve los datos de la escalada en solitario de clasica.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @throws {Object} Objeto JSON con mensaje de error si ocurre un error en la operación.
 * @async
 * @example
 * const data = await GetClasicaAlone(req, res);
 */

const GetClasicaAlone = async (req, res) => {

    try {

        console.log("Hola")        

        const data = await modelGetClasicaAlone();
        
        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else return res.status(400).json({
            ok: true,
            msg: 'No hay ningun tipo de escalada'
        });

       

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getTipo.',
            error: e
        });

    };
};


/**
 * @function GetClasica
 * @description Función asincrónica que devuelve los datos de una escalada clásica con el identificador proporcionado.
 * @param {Object} req - Objeto de solicitud HTTP con el parámetro de identificación de la escalada.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @throws {Object} Objeto JSON con mensaje de error si ocurre un error en la operación.
 * @async
 * @example
 * const data = await GetClasica(req, res);
 */


const GetClasica = async (req, res) => {

    const {id} = req.params

    console.log("Hola")

    try {

        console.log("Hola")        

        const data = await modelGetClasica(id);
        
        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else return res.status(400).json({
            ok: true,
            msg: 'No hay ningun tipo de escalada'
        });

       

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getTipo.',
            error: e
        });

    };
};


/**
 * @function GetBoulder
 * @description Función asincrónica que devuelve los datos de una escalada clásica con el identificador proporcionado.
 * @param {Object} req - Objeto de solicitud HTTP con el parámetro de identificación de la escalada.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @throws {Object} Objeto JSON con mensaje de error si ocurre un error en la operación.
 * @async
 * @example
 * const data = await GetBoulder(req, res);
 */

const GetBoulder = async (req, res) => {

    const {id} = req.params

    console.log("Hola")

    try {

        console.log("Hola")        

        const data = await modelGetBoulder(id);
        
        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else return res.status(400).json({
            ok: true,
            msg: 'No hay ningun tipo de escalada'
        });

       

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getTipo.',
            error: e
        });

    };
};


/**
 * @function GetDeportiva
 * @description Función asincrónica que devuelve los datos de una escalada clásica con el identificador proporcionado.
 * @param {Object} req - Objeto de solicitud HTTP con el parámetro de identificación de la escalada.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @throws {Object} Objeto JSON con mensaje de error si ocurre un error en la operación.
 * @async
 * @example
 * const data = await GetDeportiva(req, res);
 */

const GetDeportiva = async (req, res) => {

    const {id} = req.params

    console.log("Hola")

    try {

        console.log("Hola")        

        const data = await modelGetDeportiva(id);
        
        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else return res.status(400).json({
            ok: true,
            msg: 'No hay ningun tipo de escalada'
        });

       

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getTipo.',
            error: e
        });

    };
};


/**
 * @function GetDeportivaAlone
 * @description Función asincrónica que devuelve los datos de la escalada en solitario de deportiva.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @throws {Object} Objeto JSON con mensaje de error si ocurre un error en la operación.
 * @async
 * @example
 * const data = await GetDeportivaAlone(req, res);
 */


const GetDeportivaAlone = async (req, res) => {

    try {

        console.log("Hola")        

        const data = await modelGetDeportivaAlone();
        
        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else return res.status(400).json({
            ok: true,
            msg: 'No hay ningun tipo de escalada'
        });

       

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getTipo.',
            error: e
        });

    };
};


/**
 * @function getAll
 * @description Función asincrónica que devuelve todos los datos de las escaladas.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @throws {Object} Objeto JSON con mensaje de error si ocurre un error en la operación.
 * @async
 * @example
 * const data = await getAll(req, res);
 */

const getAll = async (req, res) => {

    try {

        console.log("Hola")        

        const data = await modelGetAll();
        
        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else return res.status(400).json({
            ok: true,
            msg: 'No hay ningun tipo de escalada'
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
 * @function getInfoByLocalizacion
 * @description Función asincrónica que devuelve la información de las escaladas según una localización específica.
 * @param {Object} params - Objeto de parámetros con la localización de la escalada.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @throws {Object} Objeto JSON con mensaje de error si ocurre un error en la operación o si no se encuentra ninguna escalada con la localización proporcionada.
 * @async
 * @example
 * const data = await getInfoByLocalizacion({ params }, res);
 */


  const getInfoByLocalizacion  = async ({ params }, res) => {

    console.log("Hola")
    console.log(params)
    try {

        const data = await modelgetLocalizacionInfo(params.localizacion);

        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else {
            const err = {};
            err.localizacion = `No se encontró ningún usuario con la localizacion: ${params.localizacion}`
            return res.status(400).json({
                ok: true,
                errors: err
            });
        }

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en funcion.',
            error: e.stack
        });

    };
};


/**
 * Obtiene todos los datos de escalada para un tipo de escalada dado.
 * @async
 * @function getAllFromTipo
 * @param {Object} req - El objeto de solicitud de Express.
 * @param {Object} req.params - Los parámetros de la solicitud de Express.
 * @param {string} req.params.tipo - El tipo de escalada del que se desean obtener los datos.
 * @param {Object} res - El objeto de respuesta de Express.
 * @returns {Promise<Object>} - Una respuesta JSON con los datos de escalada para el tipo especificado.
 * @throws {Error} - Un error de servidor si algo sale mal al obtener los datos de escalada.
 */


const getAllFromTipo = async ( { params } , res) => {

    try {
        
        const tipo = params.tipo;
        
        console.log(params.tipo)

        const data = await modelGetAllDatos(tipo);


        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else {
            const err = {};
            err.tipo = `No se encontró ningúna descripcion para ${params.tipo}`
            return res.status(400).json({
                ok: true,
                errors: err
            });
        }

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getAllFromTipo.',
            error: e.stack
        });

    };
};


module.exports = {
    GetBoulderAlone,
    // getLocation,
    getAllFromTipo,
    getAll,
    GetClasica,
    GetDeportivaAlone,
    getInfoByLocalizacion,
    GetClasicaAlone,
    GetBoulder,
    GetDeportiva
}