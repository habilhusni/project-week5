'use strict'

const express = require('express');
let router = express.Router();
// let User = require('../models/user');
let controller = require('../controllers/userController');
let aut = require('../autentikasi/auths');

/* GET home page. */
router.get('/', aut.authToken, controller.getAll);

router.post('/', controller.createOne);

router.put('/:username', aut.authToken, controller.update);

router.delete('/:username', aut.authToken, controller.deleteOne);


module.exports = router;
