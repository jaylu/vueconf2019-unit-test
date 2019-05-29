const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const messageRouter = require('./routes/messages')

function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/web', express.static(path.join(__dirname, '../dist')))

app.use('/', indexRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/messages', messageRouter)

app.use(logErrors)
app.use(errorHandler)

module.exports = app
