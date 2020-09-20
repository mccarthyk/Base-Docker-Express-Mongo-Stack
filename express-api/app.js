const express = require('express')
const app = express()
var path = require('path')
require('./config/db')()

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res, next) => {
  try {
    res.json(['😀', '😳', '🙄'])
  } catch (error) {
    next(error)
  }
})

module.exports = app
