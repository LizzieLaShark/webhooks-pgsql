var express = require('express')
var app = express()
var dotenv = require ('dotenv')
var pg = require('pg')
var knex = require('knex')({client: 'pg'})


pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT testDB FROM testdbwebhooks.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});



//var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5000/testDB';

// var knexConfig = require('./knexfile')
// var env = process.env.NODE_ENV || 'development'
// var knex = Knex(knexConfig[env])
//
// if (env == 'development') {
//   var dotenv = require('dotenv')
// dotenv.load()


// DATABASE_URL = postgresql-graceful-53310


app.get('/', function (req, res) {
  res.send('Hello!')
})

app.listen(5000)
