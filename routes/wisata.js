'use strict'
var express     = require('express');
var router      = express.Router();
var controller  = require('../controllers/wisataController');
var helper      = require('../helper/helper');

/* GET home page. */
router.get('/', controller.getAll);
router.post('/', controller.createOne);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteOne);
router.use('/search', helper.placeFind);
router.use('/result', controller.find);

module.exports = router;
