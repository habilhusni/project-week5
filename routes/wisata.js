'use strict'

const express = require('express');
let router = express.Router();
// let Wisata = require('../models/wisata');
let controller = require('../controllers/wisataController');
let aut = require('../autentikasi/auths');

/* GET home page. */
router.get('/', aut.authToken, controller.getAll);

router.post('/', aut.authToken, controller.createOne);

router.put('/:id', aut.authToken, controller.update);

router.delete('/:id', aut.authToken, controller.deleteOne);


module.exports = router;
