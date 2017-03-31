'use strict'
var express     = require('express');
var router      = express.Router();
var controller  = require('../controllers/kotaController');
var helper      = require('../helper/helper');

/* GET home page. */
router.get('/', controller.getAll);
router.post('/', controller.createOne);
router.put('/:kota_id', controller.update);
router.delete('/:kota_id', controller.deleteOne);
router.use('/search', helper.cityFind);
router.use('/result', controller.find);

module.exports = router;
