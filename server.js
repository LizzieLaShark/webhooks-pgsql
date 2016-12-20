var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var env = process.env.NODE_ENV || 'development'
var knexConfig = require('./knexfile.js')
var knexGenerator = require('knex')
var knexDbConfig = knexConfig[env]
global.knex = knexGenerator(knexDbConfig)

var port = process.env.PORT || 8080


app.post("/test", function(req, res) {

  payload = req.body.payload.person
  console.log("payload.first_name", payload.first_name)


  knex('nationbuildertestdata').insert({payload})
  .then(function(data, err){
    if(err){
      console.log('error message: ', err)
    } else {
    console.log('check data is entered')
    }
  })
})


// app.post("/createPerson", function(req, res) {
//
//   payload = req.body.payload.person
//
//   knex('nationbuildertestdata').insert({payload.person})
//   .then(function(data, err){
//     if(err){
//       console.log('error message: ', err)
//     } else {
//     console.log('success')
//     }
//   })
// })
//
//
// app.post("/updatePerson", function(req, res) {
//
//   payload = req.body.payload
//
//   knex('nationbuildertestdata').where(payload.person.id === 'id').insert({payload.person})
//   .then(function(data, err){
//     if(err){
//       console.log('error message: ', err)
//     } else {
//     console.log('success')
//     }
//   })
// })



var testKnex = function() {
  knex('nationbuildertestdata').insert({first_name: 'ngrok', email: 'ngroknpmpackage@email.com'})
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


// app.get('/db', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     client.query('SELECT * FROM nationbuildertestdata', function(err, result) {
//       done()
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows} ); }
//     })
//   })
// })
