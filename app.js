'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var Strategy = passportLocal.Strategy;
var jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');
var User = require('./models/user');

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

passport.use(new Strategy(
	function(username, password, cb) {
		User.findOne({ username: username }, function(err, person) {
			if(err) res.send(err.message);
			let isVerified = passwordHash.verify(password, person.password);
			console.log(isVerified);
			console.log(person.username);
			if(person.username == username && isVerified) {
				console.log(username);
				cb(null, person);
			}else {
				cb('USERNAME AND PASSWORD NOT MATCH!')
			}

		});

	}

))

app.use(passport.initialize());

app.use('/login', passport.authenticate('local', { session: false }), (req,res,next) => {
	var token = jwt.sign({username: req.body.username, password: req.body.password}, 'secret');
    res.send(token);
})

app.listen(3000)

module.exports = app
