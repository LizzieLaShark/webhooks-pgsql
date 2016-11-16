var express = require('express')
var app = express()
var dotenv = require ('dotenv')
var pg = require('pg')
var knex = require('knex')({client: 'pg'})

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
