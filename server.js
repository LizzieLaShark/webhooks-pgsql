var express = require('express')
var app = express()
var dotenv = require ('dotenv')
var pg = require('pg')
var knex = require('knex')({client: 'pg'})
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var port = process.env.PORT || 5000


app.post("/event", function(req, res) {

  payload = req.body.payload

  console.log(payload)

  knex('nationbuildertestdata').insert({payload})


  // Respond with a success code
  res.send('testing res.send here')
  res.sendStatus(status)
})




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
