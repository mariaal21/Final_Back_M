const express = require('express');
const router = express.Router();


const {
    getTipo,
    getLocation,
    getAllFromTipo } = require('../controllers/ControllerInfo')


router.get('/', getTipo);

router.get('/localizacion', getLocation);

router.get('/descripcion', getAllFromTipo);


module.exports = router