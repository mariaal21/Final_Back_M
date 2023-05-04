const {
    modelInsertComment, modelGetAllForo
} = require ('../models/ForoModel')


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



module.exports = {
    Insertcomment,
    getAllForo
}