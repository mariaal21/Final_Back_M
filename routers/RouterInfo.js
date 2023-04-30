const express = require('express');
const router = express.Router();



const {
    GetBoulder,
    getLocation,
    getAllFromTipo,
    getAll,
    GetClasica,
    GetDeportiva } = require('../controllers/ControllerInfo')


router.get('/', getAll);

router.get('/boulder', GetBoulder);

router.get('/clasica', GetClasica);

router.get('/deportiva', GetDeportiva);

router.get('/localizacion', getLocation);

router.get('/descripcion', getAllFromTipo);


module.exports = router