var express = require('express')
var app = express()
var dotenv = require ('dotenv')
var pg = require('pg')
//var knex = require('knex')({client: 'pg'})
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var port = process.env.PORT || 5000
//var knexConfig = require('./knexfile')
var env = process.env.NODE_ENV || 'development'
//var knex = Knex(knexConfig[env])

pg.defaults.ssl = true;

// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   if (err) throw err;
//   console.log('Connected to postgres! Getting schemas...');
// });

var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    database: 'twitter_clone_dev'
  },
  useNullAsDefault: true
})

console.log(process.env.DATABASE_URL)

app.post("/event", function(req, res) {

  payload = req.body.payload

  console.log(payload)
  console.log('testing payload var: ', payload.first_name)

  knex('nationbuildertestdata').insert({first_name: req.body.payload.first_name, email: req.body.payload.email})
  .then(function(data){
    res.send('testing res.send here')
})


  // Respond with a success code
  // res.send('testing res.send here')
  // res.sendStatus(status)
})

var testKnex = function() {
  knex('nationbuildertestdata').insert({first_name: 'hello1', email: 'thedeathofemail@hotmail.com'})
  .then(function(data){
    console.log("meaningless log message.")
  })
}

testKnex()





//var app = require('http').createServer(handler);
// var statusCode = 200;
//
// function handler (req, res) {
//   var data = '';
//
//   if (req.method == "POST") {
//     req.on('data', function(chunk) {
//       data += chunk;
//     });
//
//     req.on('end', function() {
//       console.log('Received body data:');
//       console.log(data.toString());
//     });
//   }
//
//   res.writeHead(statusCode, {'Content-Type': 'text/plain'});
//   res.end();
// }
// console.log("Returning status code " + statusCode.toString());




app.get('/', function (req, res) {
  res.send('BKK G lyf!')
})

app.listen(port)
