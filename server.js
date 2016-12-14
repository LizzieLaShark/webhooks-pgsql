var express = require('express')
var app = express()
var https = require('https')
var pg = require('pg')
//var knex = require('knex')({client: 'pg'})
var bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var Knex = require('knex')
var knexConfig = require('./knexfile.js')
var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

var port = process.env.PORT || 5000


app.post("/test", function(req, res) {

  payload = req.body.payload

  //console.log("req.body: ", req.body)
  console.log("payload: ", payload)
  console.log("payload.first_name",req.body.payload.person.first_name)


  knex('nationbuildertestdata').insert({first_name: req.body.payload.first_name, email: req.body.payload.email})
  .then(function(data){
    console.log('hitting last line of the function')
  })
})




var testKnex = function() {
  knex('nationbuildertestdata').insert({first_name: 'hello', email: 'brickwallsandheads@frustrationstation.com'})
  .then(function(data, err){
    console.log("data entered")
  })
}

//testKnex()




app.get('/', function (req, res) {
  res.send('hai')
})

app.listen(port)
















// var express = require('express')
// var app = express()
// var pg = require('pg')
// var knex = require('knex')({client: 'pg'})
// var bodyParser = require('body-parser')
//
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// var port = process.env.PORT || 5000
// var config = require('./knexfile.js');
//
//
//
//
// //DATABASE_URL = postgres://dgxssvqjvwkrto:xDEl398dlARfdVAkOegZcwI1mD@ec2-54-243-207-190.compute-1.amazonaws.com:5432/d7vjen7acmospg
//
//
// //var env = 'development';
// // var knex = require('knex')(config[env]);
//
// //var env = process.env.NODE_ENV || 'development'
//
//
// //pg.defaults.ssl = true;
//
// app.post("/event", function(req, res) {
//
//   payload = req.body.payload
//
//   console.log(payload)
//   console.log('testing payload var: ', payload.first_name)
//
//   knex('nationbuildertestdata').insert({first_name: req.body.payload.first_name, email: req.body.payload.email})
//   .then(function(data){
//     res.send('testing res.send here')
// })
//
//
//   // Respond with a success code
//   // res.send('testing res.send here')
//   // res.sendStatus(status)
// })
//
// var testKnex = function() {
//   knex('nationbuildertestdata').insert({first_name: 'hello1', email: 'thedeathofemail@hotmail.com'})
//   .then(function(data){
//     console.log("meaningless log message.")
//   })
// }
//
//  testKnex()


// app.get('/', function (req, res) {
//   res.send('BKK G lyf!')
// })
//
// app.listen(port)












// var express = require('express')
// var app = express()
// var pg = require('pg')
// var knex = require('knex')({client: 'pg'})
// var bodyParser = require('body-parser')
//
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
//
// var knexconfig = require('./knexfile.js');
// var env = 'development';
// //var knex = require('knex')(config[env]);
//
//
// var port = process.env.PORT || 5000
// var env = process.env.NODE_ENV || 'development'
// //socket = process.env.PORT
//
// console.log("process.env: ", process.env)
// console.log("argv: ", process.argv )
//
// //var connectionString = "postgres://dgxssvqjvwkrto:xDEl398dlARfdVAkOegZcwI1mD@ec2-54-243-207-190.compute-1.amazonaws.com:5432/d7vjen7acmospg"
//
// pg.defaults.ssl = true;
//
// //pg.connect(connectionString, function(err, client, done) {
//    //knex.select().from('nationbuildertestdata')
// // })
//
//
//
// app.post("/event", function(req, res) {
//
//   payload = req.body.payload
//
//   console.log(payload)
//   console.log('testing payload var: ', payload.first_name)
//
//   knex('nationbuildertestdata').insert({first_name: req.body.payload.first_name, email: req.body.payload.email})
//   .then(function(data){
//     res.send('testing res.send here')
// })
//
//
//   // Respond with a success code
//   // res.send('testing res.send here')
//   // res.sendStatus(status)
// })
//
// var testKnex = function() {
//   knex('nationbuildertestdata').insert({first_name: 'hello1', email: 'thedeathofemail@hotmail.com'})
//   .then(function(data){
//     console.log("meaningless log message.")
//   })
// }
//
// testKnex()
//
//
//
//
//
//
//
// app.get('/', function (req, res) {
//   res.send('BKK G lyf!')
// })
//
// app.listen(port)
