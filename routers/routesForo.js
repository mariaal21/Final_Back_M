const express = require('express');
const router = express.Router();

const { Insertcomment, getAllForo, deleteforo } = require('../controllers/ControllerForo')


router.post ('/', Insertcomment)

router.get('/', getAllForo);

router.delete('/:id', deleteforo);


router.put('/:id', deleteforo);

module.exports = router

