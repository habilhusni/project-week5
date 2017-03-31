require('dotenv').config();
const express           = require('express');
const bodyParser        = require('body-parser');
const Speech            = require('@google-cloud/speech');
const googleMapsClient  = require('@google/maps').createClient({key:process.env.MAPSCLIENT});
const helper            = require('./helper/helper');
const mongoose          = require('mongoose');

const index             = require('./routes/index');
const users             = require('./routes/users');
const kota              = require('./routes/kota');
const wisata            = require('./routes/wisata');

mongoose.connect('mongodb://localhost/project_week5');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', index);
app.use('/users', users);
app.use('/kota', kota);
app.use('/wisata', wisata);

// app.use('/search',function (req,res,next) {
//   helper.voice
//   googleMapsClient.geocode({
//     address: req.query.input
//   }, function(err, response) {
//     if (!err) {
//       res.send(response.json.results);
//     }
//   });
// });
//
// app.use('/',helper.cityFind);

app.listen(3000);
