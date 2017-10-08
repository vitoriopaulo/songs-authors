'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  // console.log('Sucessfully signed up!')
  $('.my-input').val("")
  $('#message').show().text('Sucessfully signed up!').fadeOut(5000)
}

const signUpFailure = function (error) {
  console.error(error)
  $('.my-input').val("")
  $('#message').show().text('Error on sign up: email and/or password already token. Try again with different credentials.').fadeOut(5000)
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
  $('#message').show().text('Sucessfully signed In!').fadeOut(5000)
}

const signInFailure = function (error) {
  console.error(error)
  $('.my-input').val("")
  $('#message').show().text('Error on sign in: wrong email and/or password. Try again.').fadeOut(5000)
}

const changePasswordSuccess = function (data) {
  // console.log(data)
  // console.log('Password sucessfully changed!')
  $('.my-input').val("")
  $('#message').show().text('Password sucessfully changed!').fadeOut(5000)
}

const changePasswordFailure = function (error) {
  console.log(error)
  // console.log('Password already token. Try again.')
  $('.my-input').val("")
  $('#message').show().text('Password already token. Try again.').fadeOut(5000)
}

const signOutSuccess = function (data) {
  $('.starting-page').show()
  $('.signed-in-page').hide()
  $('#songs').hide()
  $('#song').hide()
  // console.log(data)
  store.user = null
  // console.log('Signed out succesfully!')
  $('#message').show().text('Signed out successfully!').fadeOut(5000)
  // console.log(store.user)
}

const signOutFailure = function (error) {
  console.log(error)
  // console.log('Failure signing out.')
  $('#message').show().text('Failure signing out.').fadeOut(5000)
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
