'use strict'
require('dotenv').config();
const googleMapsClient  = require('@google/maps').createClient({key:process.env.MAPSCLIENT});
let Kota                = require('../models/kota');
let Wisata              = require('../models/wisata');

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
let find = function (req,res,next) {
  Kota.findOne({kota_name: req.query.input},function(err,kota){
    if(err) return handleError(err);
    if(kota){
      Wisata.find({kota:kota._id})
      .populate('kota')
      .exec(function(err, wisata){
        if(err) return handleError(err);
        mapping(wisata)
        .then(function(wisata){
          res.send(wisata)
        })
      })
    } else {
      res.send('kota yang dicari tidak ada')
    }
  })
}

let mapping = function (wisata) {
  var count = 0;
  return new Promise((resolve,reject) => {
    for(let i=0;i<wisata.length;i++){
      googleMapsClient.geocode({
        address: wisata[i].address
      }, function(err, response) {
        if (!err) {
          count += 1;
          wisata[i].geoloc = JSON.stringify(response.json.results[0].geometry.location)
        }
        if (count == wisata.length){
          resolve(wisata)
        }
      });
    }
  });
}

module.exports = {
  getAll,
  createOne,
  update,
  deleteOne,
  find
}
