'use strict'

let Kota = require('../models/kota');

let getAll = function (req, res, next) {
  Kota.find(function (err, cities){
    if(err){
      res.json({error: err});
    } else {
      res.json(cities);
    }
  })
};

let createOne = function (req, res, next) {
  Kota.create({
    kota_id: req.body.kota_id,
    kota_name: req.body.kota_name
  }, function (error, user){
    if(error) throw error;
    res.send(user);
  })
};

let update = function (req, res, next) {
  Kota.findOne({kota_id: req.params.kota_id}, function (err, kota) {
  if (err) return handleError(err);

  kota.kota_name = req.body.kota_name;
  kota.save(function (err, updatedKota) {
    if (err) return handleError(err);
    res.send(updatedKota);
  });
  });
};

let deleteOne = function (req, res, next) {
  Kota.findOne({kota_id: req.params.kota_id}).remove(function(err){
    res.send(err);
  })
};

module.exports = {
  getAll,
  createOne,
  update,
  deleteOne
}
