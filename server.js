var express = require('express')
var app = express()
var dotenv = require ('dotenv')
var pg = require('pg')
var knex = require('knex')({client: 'pg'})

var port = process.env.PORT || 5000



// DATABASE_URL = postgresql-graceful-53310


app.get('/', function (req, res) {
  res.send('BKK G lyf!')
})

app.listen(port)
