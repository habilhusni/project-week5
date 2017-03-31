'use strict'

const express = require('express');
let router = express.Router();
// let Kota = require('../models/kota');
let controller = require('../controllers/kotaController');
let aut = require('../autentikasi/auths');

/* GET home page. */
router.get('/', aut.authToken, controller.getAll);

router.post('/', aut.authToken, controller.createOne);

router.put('/:kota_id', aut.authToken, controller.update);

router.delete('/:kota_id', aut.authToken, controller.deleteOne);


module.exports = router;
