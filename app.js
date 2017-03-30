var express = require('express');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var kota = require('./routes/kota');
var wisata = require('./routes/wisata');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project_week5');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', index);
app.use('/users', users);
app.use('/kota', kota);
app.use('/wisata', wisata);

app.listen(3000)

module.exports = app
