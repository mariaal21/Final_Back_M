const express = require('express');
const router = express.Router();

const {
    GetBoulder,
    getAllFromTipo,
    getAll,
    GetClasica,
    GetDeportiva,
    getInfoByLocalizacion,
    GetClasicaAlone } = require('../controllers/ControllerInfo')


router.get('/', getAll);

router.get('/boulder', GetBoulder);

router.get('/localizacion/:localizacion', getInfoByLocalizacion )

router.get('/clasica/:id', GetClasica);

router.get('/clasica', GetClasicaAlone);

router.get('/deportiva', GetDeportiva);


router.get('/descripcion', getAllFromTipo);


module.exports = router