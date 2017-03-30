'use strict'

const express = require('express');
let router = express.Router();
// let Kota = require('../models/kota');
let controller = require('../controllers/kotaController');

/* GET home page. */
router.get('/', controller.getAll);

router.post('/', controller.createOne);

router.put('/:kota_id', controller.update);

router.delete('/:kota_id', controller.deleteOne);


module.exports = router;
