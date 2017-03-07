var express = require('express')
var app = express()
var bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



/////***** DB Connection Code (client bug still thrown even with this set up) *****\\\\\

var env = 'development'
var knexConfig = require('./knexfile.js')
var knexGenerator = require('knex')
var knexDbConfig = knexConfig[env]
global.knex = knexGenerator(knexDbConfig)

var port = process.env.PORT || 8080

console.log(knexDbConfig)
console.log(process.env.PG_CONNECTION_STRING)

/////***** Alternative DB Connection Code *****\\\\\

//var pg = require('pg');

// pg.defaults.ssl = true;
// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   if (err) throw err;
//   console.log('Connected to postgres!');
// });

// app.use(logger('dev'));
// app.use(cookieParser());



////*** Add New Contact ***\\\

app.post('/addContact', function(req, res) {

  payload = req.body.payload.person

  knex('contacts').insert({
      contact_id: payload.id,
      contact_name: payload.first_name && payload.last_name,
      email: payload.email,
      created_at: payload.created_at,
      phone: payload.phone //still need to add a few more inputs but need to see payload to structure naming
    })
    .then(function(data, err){
      if(err){
        console.log('error message: ', err)
      } else {
      console.log('New Nationbuilder Contact Entered into SQL Database')
        }
})
})



////**** Update Person ****\\\\

app.post("/updatePerson", function(req, res) {

  payload = req.body.payload.person
  console.log(payload.email)

  knex('contacts').where({id: payload.id}).update({
      updated_at: payload.updated_at,
      contact_name: payload.first_name && payload.last_name,
      email: payload.email,
      phone: payload.phone  //still need to add a few more inputs but need to see payload to structure naming
    })
    .then(function(data, err){
      if(err){
        console.log('error message: ', err)
      } else {
      console.log('Person Successfully Updated from Nationbuilder to SQL')
      }
  })
})




////**** Delete Contact From Database ****\\\\

app.post("/deletePerson", function(req, res) {

  payload = req.body.payload.person

  knex('contacts').where({contact_id: payload.id}).del()
  .then(function(data, err){
    if(err){
      console.log('error message: ', err)
    } else {
    console.log('Person Deleted. Goodbye.')
    }
  })
})



////// Check add person contacts table\\\\\

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
