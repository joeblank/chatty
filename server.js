var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())

var messages = [];


app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages))
})

app.post('/', function(req, res) {

  messages.unshift({
    message: req.body.message,
    username: req.body.username,
    avatar: req.body.avatar,
    time: new Date()
  });

  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));

  res.end();
})

app.options('/', function(req, res, next) {

  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': "OPTIONS, GET, POST",
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }).send();
})










app.listen(9000, function() {
  console.log('listening to port 9000')
});
