var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
//.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// var env = process.env.NODE_ENV || 'production'
// var knexConfig = require('./knexfile.js')
// var knexGenerator = require('knex')('production')
// var knexDbConfig = knexConfig[env]
// global.knex = knexGenerator(knexDbConfig)


//console.log(process.env.DATABASE_URL)
//console.log('client', knexConfig.production.client)

var pg = require('pg');

pg.defaults.ssl = true;

pg.connect('postgres://dgxssvqjvwkrto:xDEl398dlARfdVAkOegZcwI1mD@ec2-54-243-207-190.compute-1.amazonaws.com:5432/d7vjen7acmospg', function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      //console.log(JSON.stringify(row));
    });
});





var port = process.env.PORT || 8080

app.post("/test", function(req, res) {

  payload = req.body.payload.person
  console.log("payload", payload)

  knex('nationbuildertestdata').insert({id: payload.id, first_name: payload.first_name, email: payload.email, created_at: payload.created_at})
  .then(function(data, err){
    if(err){
      console.log('error message: ', err)
    } else {
    console.log('check data is entered')
    }
  })
})

app.post("/updatePerson", function(req, res) {

  payload = req.body.payload.person

  knex('nationbuildertestdata').where({id: payload.id}).update({updated_at: payload.updated_at, first_name: payload.first_name, last_name: payload.last_name, email: payload.email})
  .then(function(data, err){
    if(err){
      console.log('error message: ', err)
    } else {
    console.log('Congratulations! Person Updated from Nationbuilder to SQL')
    }
  })
})

app.post("/deletePerson", function(req, res) {

  payload = req.body.payload.person

  knex('nationbuildertestdata').where({id: payload.id}).del()
  .then(function(data, err){
    if(err){
      console.log('error message: ', err)
    } else {
    console.log('Person Deleted. Goodbye.')
    }
  })
})

// var testKnex = function() {
//   knex('nationbuildertestdata').insert({first_name: 'clientBug', email: 'bugg101@email.com'})
//   .then(function(data, err){
//     console.log("data entered")
//   })
// }

//testKnex()



app.get('/', function (req, res) {
  res.send('hai')
})

app.listen(port)
