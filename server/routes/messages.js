const express = require('express')
const _ = require('lodash')
const router = express.Router()
const Message = require('../model/Message')

/* GET users listing. */
let messages = []

function isValidMessage (message) {
  return message &&
    message.message &&
    message.sender &&
    message.time
}

function filterValuesByKeywords (messages, searchText) {
  return messages.filter(message => {
    return Object
      .values(message)
      .filter(value =>
        String(value)
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) >= 0)
      .length > 0
  })
}

router.get('/', function (req, res, next) {
  let searchText = req.query.search
  let cloneMessages = _.cloneDeep(messages)
  let result = searchText ? filterValuesByKeywords(cloneMessages, searchText) : cloneMessages
  res.json(result)
})

router.post('/', (req, res, next) => {
  let message = new Message(req.body)
  if (req.body && isValidMessage(message)) {
    messages.push(message)
    res.json(message)
  } else {
    res.status(400).json({
      error: 'message body not valid, missing required fields: message, sender, time'
    })
  }
})

module.exports = router
