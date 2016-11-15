var express = require('express')
var app = express()
var pg = require('pg')
var knex = require('knex')


// var knexConfig = require('./knexfile')
// var env = process.env.NODE_ENV || 'development'
// var knex = Knex(knexConfig[env])
//
// if (env == 'development') {
//   var dotenv = require('dotenv')
// dotenv.load()
