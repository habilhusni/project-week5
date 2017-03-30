'use strict'

let Wisata = require('../models/wisata');

let getAll = function (req, res, next) {
  Wisata.find()
  .populate('kota',['kota_id','kota_name'])
  .exec(function (err, instances) {
    if (err) return handleError(err);
    res.send(instances);
  })
};

let createOne = function (req, res, next) {
  Wisata.create({
    name: req.body.name,
    address: req.body.address,
    kota: req.body.kota
  }, function (error, user){
    if(error) throw error;
    res.send(user);
  })
};

let update = function (req, res, next) {
  Wisata.findOne({_id: req.params.id}, function (err, wisata) {
  if (err) return handleError(err);

  wisata.name = req.body.name,
  wisata.address = req.body.address,
  wisata.kota = req.body.kota
  wisata.save(function (err, updatedWisata) {
    if (err) return handleError(err);
    res.send(updatedWisata);
  });
  });
};

let deleteOne = function (req, res, next) {
  Wisata.findOne({_id: req.params.id}).remove(function(err){
    res.send(err);
  })
};

module.exports = {
  getAll,
  createOne,
  update,
  deleteOne
}
