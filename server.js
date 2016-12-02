var express = require('express')
var app = express()
var dotenv = require ('dotenv')
var pg = require('pg')
var knex = require('knex')({client: 'pg'})

var port = process.env.PORT || 5000


app.post("/event", function(req, res) {
  var NBdata = res.payload

  console.log('NBdata: ', NBdata)
  console.log('testing logs!')
  console.log('testing res.body!', res.body)
  console.log('testing req.body!', req.body)

  // Respond with a success code
  res.send('testing res.send here!')
  res.sendStatus(status)
})



//try .payload and .person and maybe .payload.person or .payload[person]





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
