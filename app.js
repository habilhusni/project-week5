require('dotenv').config();
const express           = require('express');
const bodyParser        = require('body-parser');
const Speech            = require('@google-cloud/speech');
const googleMapsClient  = require('@google/maps').createClient({key:process.env.MAPSCLIENT});
const helper            = require('./helper/helper');
const mongoose          = require('mongoose');
const passport          = require('passport');
const Strategy          = require('passport-local').Strategy;
const jwt               = require('jsonwebtoken');
const passwordHash      = require('password-hash');
const cors 							= require('cors');

var User                = require('./models/user');

const index             = require('./routes/index');
const users             = require('./routes/users');
const kota              = require('./routes/kota');
const wisata            = require('./routes/wisata');

mongoose.connect('mongodb://localhost/project_week5');
var app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', index);
app.use('/users', users);
app.use('/kota', kota);
app.use('/wisata', wisata);

passport.use(new Strategy(
	function(username, password, cb) {
		User.findOne({ username: username }, function(err, user) {
			if(err) res.send(err.message);
			let isVerified = passwordHash.verify(password, user.password);
			console.log(isVerified);
			console.log(user.username);
			if(user.username == username && isVerified) {
				console.log(username);
				cb(null, user);
			}else {
				cb('USERNAME AND PASSWORD NOT MATCH!')
			}
		});
	}
))

app.use(passport.initialize());

app.use('/login', passport.authenticate('local', { session: false }), (req,res,next) => {
	var token = jwt.sign({username: req.user.username, role: req.user.role}, process.env.SECRETKEYS);
    res.send(token);
})

app.listen(3000);
