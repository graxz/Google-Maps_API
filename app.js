const express = require('express')
const homeRoute = require('./routes/home')
const aboutMeRoute = require('./routes/about_me')

const app = express()

app.use(express.json())
app.use(homeRoute)
app.use(aboutMeRoute)

module.exports = app