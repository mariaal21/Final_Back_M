const {
    modelGetBoulder,
    modelGetLocation,
    modelGetAllDatos, 
modelGetAll,
modelGetClasica,
modelGetDeportiva } = require('../models/InfoModel')


const GetBoulder = async (req, res) => {

    try {

        console.log("Hola")        

        const data = await modelGetBoulder();
        
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


const GetClasica = async (req, res) => {

    try {

        console.log("Hola")        

        const data = await modelGetClasica();
        
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



const GetDeportiva = async (req, res) => {

    try {

        console.log("Hola")        

        const data = await modelGetDeportiva();
        
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
    GetBoulder,
    getLocation,
    getAllFromTipo,
    getAll,
    GetClasica,
    GetDeportiva
}