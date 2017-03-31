function streamingMicRecognize (encoding, sampleRate) {
  // [START speech_streaming_mic_recognize]
  const record = require('node-record-lpcm16');

  // Imports the Google Cloud client library
  const speech = require('@google-cloud/speech')({
  projectId: 'black-anagram-163109',
  keyFilename: './keyfile.json'
  });

  // Instantiates a client
  // const speech = Speech();

  // The encoding of the audio file, e.g. 'LINEAR16'
  // const encoding = 'LINEAR16';

  // The sample rate of the audio file, e.g. 16000
  // const sampleRate = 16000;

  const request = {
    config: {
      encoding: 'LINEAR16',
      sampleRate: 16000,
      languageCode: 'id-ID'
    }
  };

  // Create a recognize stream
  const recognizeStream = speech.createRecognizeStream(request)
    .on('error', console.error)
    .on('data', (data) => process.stdout.write(data.results));
    // .on('data', (data) => voice = data.results);

  // Start recording and send the microphone input to the Speech API
  record.start({
    sampleRate: 16000,
    threshold: 0})
    .pipe(recognizeStream);

  setTimeout(function () {
    record.stop()
  }, 3000)

  console.log('Listening, press Ctrl+C to stop.');
  // [END speech_streaming_mic_recognize]
}

streamingMicRecognize()
