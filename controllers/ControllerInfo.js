const {
    modelGetTipo,
    modelGetLocation,
    modelGetAllDatos } = require('../models/InfoModel')


const getTipo = async (req, res) => {

    try {

        console.log("Hola")        

        const data = await modelGetTipo();
        
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


const getLocation = async (req, res) => {

    try {

        const data = await modelGetLocation();

        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else return res.status(400).json({
            ok: true,
            msg: 'No hay ningun localizacion'
        });

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getLocation',
            error: e
        });

    };
};


const getAllFromTipo = async ( { params } , res) => {

    try {
        
        const tipo = req.params.tipo;
        
        const data = await modelGetAllDatos(tipo);


        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else {
            const err = {};
            err.email = `No se encontró ningúna descripcion para ${params.tipo}`
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
    getTipo,
    getLocation,
    getAllFromTipo
}