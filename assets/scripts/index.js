'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
// const songsEvents = require('./songs/ui2')
const songsEvents = require('./songs/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example

$(() => {
  authEvents.addHandlers()
  songsEvents.addHandlers2()
  $('.signed-in-page').hide()
  // $('#sign-up').on('submit', function (event) {
  //   event.preventDefault()
  //   console.log('form being submitted')
  // })
})
