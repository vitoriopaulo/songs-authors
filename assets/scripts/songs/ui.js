'use strict'
const store = require('../store')

const getAllSongsSuccess = function (data) {
  store.songs = data.songs
  console.log(data)
  console.log('Sucessfully get all songs.')
  $('.my-input').val("")
  $('#message').text('Sucessfully get all songs.')
}

const getAllSongsFailure = function (error) {
  console.error(error)
  $('.my-input').val("")
  $('#message').text('Error: songs not successfully loaded. Try again.')
}

const getOneSongSuccess = function (data) {
  $('.my-input').val("")
  console.log('data')
  store.song = data.song
  console.log(store)
  $('#message').text('Sucessfully get song.')
}

const getOneSongFailure = function (error) {
  console.error(error)
  $('.my-input').val("")
  $('#message').text('Error on getting song. Try again.')
}

const addSongSuccess = function (data) {
  console.log(data)
  // console.log('Password sucessfully changed!')
  $('.my-input').val("")
  $('#message').text('Song sucessfully added.')
}

const addSongFailure = function (error) {
  console.log(error)
  // console.log('Password already token. Try again.')
  $('.my-input').val("")
  $('#message').text('Song already exist in database. Add another song.')
}

const updateSongSuccess = function (data) {
  console.log(data)
  $('.my-input').val("")
  $('#message').text('Song updated succesfully.')
}

const updateSongFailure = function (data) {
  console.log(data)
  $('.my-input').val("")
  $('#message').text('Failure on updating song.')
}

const deleteSongSuccess = function (data) {
  $('.my-input').val("")
  console.log(data)
  store.song = null
  // console.log('Signed out succesfully!')
  $('#message').text('Song successfully deleted.')
  console.log(store.song)
}

const deleteSongFailure = function (error) {
  $('.my-input').val("")
  console.log(error)
  // console.log('Failure signing out.')
  $('#message').text('Failure deleting song.')
}

module.exports = {
  getAllSongsSuccess,
  getAllSongsFailure,
  getOneSongSuccess,
  getOneSongFailure,
  addSongSuccess,
  addSongFailure,
  updateSongSuccess,
  updateSongFailure,
  deleteSongSuccess,
  deleteSongFailure
}
