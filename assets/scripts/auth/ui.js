'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  // console.log('Sucessfully signed up!')
  $('.my-input').val("")
  $('#message').text('Sucessfully signed up!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('.my-input').val("")
  $('#message').text('Error on sign up: email and/or password already token. Try again with different credentials.')
}

const signInSuccess = function (data) {
  $('.signed-in-page').show()
  $('.starting-page').hide()
  $('#songs').hide()
  $('#song').hide()
  $('.box').hide()
  $('.my-input').val("")
  // $('#sign-up').reset()
  console.log(data)
  store.user = data.user
  // console.log(store)
  $('#message').text('Sucessfully signed In!')
}

const signInFailure = function (error) {
  console.error(error)
  $('.my-input').val("")
  $('#message').text('Error on sign in: wrong email and/or password. Try again.')
}

const changePasswordSuccess = function (data) {
  // console.log(data)
  // console.log('Password sucessfully changed!')
  $('.my-input').val("")
  $('#message').text('Password sucessfully changed!')
}

const changePasswordFailure = function (error) {
  console.log(error)
  // console.log('Password already token. Try again.')
  $('.my-input').val("")
  $('#message').text('Password already token. Try again.')
}

const signOutSuccess = function (data) {
  $('.starting-page').show()
  $('.signed-in-page').hide()
  $('#songs').hide()
  $('#song').hide()
  // console.log(data)
  store.user = null
  // console.log('Signed out succesfully!')
  $('#message').text('Signed out successfully!')
  console.log(store.user)
}

const signOutFailure = function (error) {
  console.log(error)
  // console.log('Failure signing out.')
  $('#message').text('Failure signing out.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
