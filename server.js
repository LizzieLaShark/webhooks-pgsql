var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// var path = require('path');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var env = process.env.NODE_ENV || 'development'
var knexConfig = require('./knexfile.js')
var knexGenerator = require('knex')
var knexDbConfig = knexConfig[env]
global.knex = knexGenerator(knexDbConfig)

var port = process.env.PORT || 8080

//var pg = require('pg');

// pg.defaults.ssl = true;
// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   if (err) throw err;
//   console.log('Connected to postgres! Getting schemas...');
// });

// app.use(logger('dev'));
// app.use(cookieParser());

payload = req.body.payload.person

////*** Add New Contact ***\\\

app.post('/addContact', function(req, res) {

  knex('contacts').insert({contact_id: payload.id, contact_name: payload.first_name && payload.last_name, email: payload.email, created_at: payload.created_at})
    .then(function(data, err){
      if(err){
        console.log('error message: ', err)
      } else {
      console.log('check data is entered')
        }
    })
})

////**** Update Person ****\\\\



////**** Delete Contact From Database ****\\\\

app.post("/deletePerson", function(req, res) {

  knex('contacts').where({contact_id: payload.id}).del()
  .then(function(data, err){
    if(err){
      console.log('error message: ', err)
    } else {
    console.log('Person Deleted. Goodbye.')
    }
  })
})



//////add person contacts table\\\\\

knex('contacts').insert({contact_id: payload.id, contact_name: payload.first_name && payload.last_name, email: payload.email, created_at: payload.created_at})
.then(function(data, err){
  if(err){
    console.log('error message: ', err)
  } else {
  console.log('check data is entered')
    }
  })




const testNew = function() {

  knex('contacts').insert({contact_id: '1233', contact_name: 'firstnamehere' && 'lastnamehere', email: 'bla@bla.com', created_at: '2017/12/12'})
  .then(function(data, err){
    if(err){
      console.log('error message: ', err)
    } else {
    console.log('check data is entered')
      }
    })
  }

//testNew()


app.get('/', function (req, res) {
  res.send('hai')
})

app.listen(port)
