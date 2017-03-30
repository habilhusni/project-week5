var express = require('express');
var bodyParser = require('body-parser');
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyD5h9OsBiep0Gm_ijKxjuVZ6I89XSSagJg'
});
var speech = require('@google-cloud/speech')({
  projectId: 'black-anagram-163109',
  keyFilename: './keyfile.json'
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000)

app.use('/',function (req,res,next) {
  googleMapsClient.geocode({
    address: 'jalan Setiabudi no.200 bandung'
  }, function(err, response) {
    if (!err) {
      res.send(response.json.results);
    }
  });
});

app.use('/sound',function (req,res,next) {
// Detect the speech in an audio file.
speech.recognize('./audio.raw', {
  encoding: 'LINEAR16',
  sampleRate: 16000
}, function(err, transcript) {
  res.send(transcript)
  // transcript = 'how old is the Brooklyn Bridge'
});

});

module.exports = app
