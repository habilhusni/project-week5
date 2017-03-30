'use strict'

const express = require('express');
let router = express.Router();
// let Wisata = require('../models/wisata');
let controller = require('../controllers/wisataController');

/* GET home page. */
router.get('/', controller.getAll);

router.post('/', controller.createOne);

router.put('/:id', controller.update);

router.delete('/:id', controller.deleteOne);


module.exports = router;
