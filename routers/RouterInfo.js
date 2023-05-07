const express = require('express');
const router = express.Router();

const {
    GetBoulderAlone,
    getAllFromTipo,
    getAll,
    GetClasica,
    GetDeportivaAlone,
    getInfoByLocalizacion,
    GetClasicaAlone,
    GetBoulder,
    GetDeportiva } = require('../controllers/ControllerInfo')


router.get('/', getAll);

router.get('/boulder', GetBoulderAlone);

router.get('/boulder/:id', GetBoulder);

router.get('/localizacion/:localizacion', getInfoByLocalizacion)

router.get('/clasica/:id', GetClasica);

router.get('/clasica', GetClasicaAlone);

router.get('/deportiva', GetDeportivaAlone);

router.get('/deportiva/:id', GetDeportiva);


router.get('/descripcion', getAllFromTipo);


module.exports = router