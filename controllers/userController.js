'use strict'

const password = require('password-hash');
let User = require('../models/user');

let getAll = function (req, res, next) {
  User.find(function (err, users){
    if(err){
      res.json({error: err});
    } else {
      res.json(users);
    }
  })
};
let createOne = function (req, res, next) {
  // Creating hash
  let hashPassword = password.generate(req.body.password);
  User.create({
    name: req.body.name,
    username: req.body.username,
    password: hashPassword,
    email: req.body.email,
    phone: req.body.phone,
    role: req.body.role
  }, function (error, user){
    if(error) throw error;
    res.send(user);
  })
};
let update = function (req, res, next) {
  User.findOne({username: req.params.username}, function (err, user) {
  if (err) return handleError(err);
  // Creating hash
  let hashPassword = password.generate(req.body.password);

  user.name = req.body.name;
  user.password = hashPassword,
  user.email = req.body.email,
  user.phone = req.body.phone
  user.save(function (err, updatedUser) {
    if (err) return handleError(err);
    res.send(updatedUser);
  });
  });
};
let deleteOne = function (req, res, next) {
  User.findOne({username: req.params.username}).remove(function(err){
    res.send(err);
  })
};

module.exports = {
  getAll,
  createOne,
  update,
  deleteOne
}
