'use strict'
const store = require('../store')

const getAllSongsSuccess = function (data) {
  store.songs = data.songs

  $('#songs').show()

  let newHTML = " "
  store.songs.forEach(function (song) {
  newHTML += "<li><h4>" + song.title + "</h4> By " + song.authors + ", composed in '<em>" + song.year + "</em>'</li>"
  })
  $("#songs").html(newHTML)

  console.log(data)
  console.log('Sucessfully get all songs.')
  // $('.my-input').val("")
  $('#message').text('Sucessfully get all songs.')
}

const getAllSongsFailure = function (error) {
  console.error(error)
  $('#message').text('Error: songs not successfully loaded. Try again.')
}

// const hideAllSongsSuccess = function () {
//   $('#songs').hide()
//   $('#message').text('Sucessfully hide all songs.')
// }
//
// const hideAllSongsFailure = function (error) {
//   console.log(error)
//   $('#message').text('Error on hidding songs. Try again.')
// }

const getOneSongSuccess = function (data) {
  console.log('Discovering what is it called data:' + data)

  $('#song').show()

  $("#song").html("<li><h4>" + data.song.title + "</h4> By " + data.song.authors + ", composed in '<em>" + data.song.year + "</em>'</li>")

  $('.my-input').val("")
  // console.log(data)
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
  $('#message').text('Failure on trying to add song to database. Try again.')
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
  // console.log(data.song)
  $('.my-input').val("")
  // console.log('Signed out succesfully!')
  $('#message').text('Song successfully deleted.')
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
  // hideAllSongsSuccess,
  // hideAllSongsFailure
}
