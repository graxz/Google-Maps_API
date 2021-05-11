const express = require('express')
const homeRoute = require('./routes/home')

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}   

const app = express()


app.use(allowCrossDomain);
app.use(express.json())
app.use(homeRoute)

module.exports = app