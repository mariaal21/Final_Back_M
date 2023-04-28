const {
    modelGetUsers,
    modelGetUserByEmail,
    modelCreateUser,
    modelLoginUser,
    modelChangePassword,
    modelLogoutUser } = require('../models/UserModel')


const getUsers = async (req, res) => {

    try {

        const data = await modelGetUsers();

        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else return res.status(400).json({
            ok: true,
            msg: 'No existen usuarios'
        });

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getUsers.',
            error: e
        });

    };
};


const getUserByEmail = async ({ params }, res) => {

    try {

        const data = await modelGetUserByEmail(params.email);

        if (data) return res.status(200).json({
            ok: true,
            data
        });
        else {
            const err = {};
            err.email = `No se encontró ningún usuario con el email: ${params.email}`
            return res.status(400).json({
                ok: true,
                errors: err
            });
        }

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en getUserByEmail.',
            error: e.stack
        });

    };
};


const createUser = async ({ body }, res) => {

    try {

        const data = await modelCreateUser(body);

        if (data) return res.status(200).json({
            ok: true,
            data
        });

    } catch (e) {
        if (e.toString().includes('duplicate key value')) {

            let err = { email: {} };
            err.email.msg = 'Este correo ya esta registrado'

            return res.status(500).json({
                ok: false,
                errors: err
            });
        }

        return res.status(500).json({
            ok: false,
            msg: 'Error en createUser.',
            error: e.stack
        });

    };
};


const loginUser = async ({ body }, res) => {

    try {

        const { result, isPassOK } = await modelLoginUser(body);

        if (result) {
            if (!isPassOK) return res.status(401).json({
                ok: false,
                msg: 'El usuario/contraseña no coinciden'
            })

            return res.status(200).json({
                ok: true,
                msg: 'loginUser OK.',
                user: {
                    id: result.userid,
                    name: result.name,
                    rol: result.rol
                }
            });
        } else return res.status(401).json({
            ok: false,
            msg: 'El usuario/contraseña no corresponden a los datos almacenados.'
        });

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en loginUser.',
            error: e.stack
        });

    };
};


const changePassword = async ({ body }, res) => {

    try {

        const { result, isPassOK } = await modelChangePassword(body);

        if (result) {
            if (!isPassOK) return res.status(401).json({
                ok: false,
                error: 'La contraseña no corresponde'
            })

            return res.status(200).json({
                ok: true,
                msg: 'changePassword OK.'
            });
        } else return res.status(401).json({
            ok: false,
            msg: `changePassword error`,
            result
        });

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en changePassword.',
            error: e.stack
        });

    };
};


const logoutUser = async ({ body }, res) => {

    try {

        await modelLogoutUser(body);

        return res.status(200).json({
            ok: true,
            msg: 'logoutUser OK.'
        });

    } catch (e) {

        return res.status(500).json({
            ok: false,
            msg: 'Error en logoutUser.',
            error: e.stack
        });

    };
};


module.exports = {
    getUsers,
    getUserByEmail,
    createUser,
    loginUser,
    changePassword,
    logoutUser
}