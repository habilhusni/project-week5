'use strict'

const express = require('express');
let router = express.Router();
// let User = require('../models/user');
let controller = require('../controllers/userController');

/* GET home page. */
router.get('/', controller.getAll);

router.post('/', controller.createOne);

router.put('/:username', controller.update);

router.delete('/:username', controller.deleteOne);


module.exports = router;
