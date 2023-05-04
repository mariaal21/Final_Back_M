const express = require('express');
const router = express.Router();

const { Insertcomment, getAllForo } = require('../controllers/ControllerForo')


router.post ('/', Insertcomment)

router.get('/', getAllForo);

module.exports = router
