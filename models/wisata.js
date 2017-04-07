'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create a Schema
let wisataSchema = new Schema({
  name: String,
  address: String,
  image: String
});

//the schema is useless so far
//we need to create a model using it
let Wisata = mongoose.model('Wisata', wisataSchema);

//make this available to our users in our Node Applications
module.exports = Wisata;
