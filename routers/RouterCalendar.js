const express = require('express');
const router = express.Router();

const { InsertcommentCalendar,
    getAllCalendar,
    deletecalendar} = require('../controllers/ControllerCalendar')


router.post ('/', InsertcommentCalendar)

router.get('/', getAllCalendar);

router.delete('/:id', deletecalendar);

module.exports = router
