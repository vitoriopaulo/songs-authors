'use strict'
const store = require('../store')

const getAllSongsSuccess = function (data) {
  store.songs = data.songs

  $('#songs').show()

  let newHTML = " "
  store.songs.forEach(function (song) {
    newHTML += "<li><h4>" + song.id + '. ' + song.title + "</h4> By " + song.authors + ", composed in '<em>" + song.year + "</em>'</li>"
  })
  $("#songs").html(newHTML)

  console.log(data)
  // console.log('Sucessfully get all songs.')
  // $('.my-input').val("")
  $('#message').show().text('Sucessfully get all songs? Cool! Nope? Add songs to your list!').fadeOut(7500)
}

const getAllSongsFailure = function (error) {
  console.error(error)
  $('#message').show().text('Error: songs not successfully loaded. Try again.').fadeOut(5000)
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
  // console.log('Discovering what is it called data:' + data)

  $('#song').show()

  $("#song").html("<li><h4>" + data.song.title + "</h4> By " + data.song.authors + ", composed in '<em>" + data.song.year + "</em>'</li>")

  $('.my-input').val("")
  // console.log(data)
  store.song = data.song
  // console.log(store)
  $('#message_1').show().text('Sucessfully get song.').fadeOut(5000)
}

const getOneSongFailure = function (error) {
  console.error(error)
  $('.my-input').val("")
  $('#message_1').show().text('Error on getting song. Try again.').fadeOut(5000)
}

const addSongSuccess = function (data) {
  // console.log(data)
  // console.log('Password sucessfully changed!')
  $('.my-input').val("")
  $('#message_2').show().text('Song sucessfully added.').fadeOut(5000)
}

const addSongFailure = function (error) {
  console.log(error)
  // console.log('Password already token. Try again.')
  $('.my-input').val("")
  $('#message_2').show().text('Failure on trying to add song to database. Try again.').fadeOut(5000)
}

const updateSongSuccess = function (data) {
  // console.log(data)
  $('.my-input').val("")
  $('#message_3').show().text('Song updated succesfully.').fadeOut(5000)
}

const updateSongFailure = function (data) {
  // console.log(data)
  $('.my-input').val("")
  $('#message_3').show().text('Failure on updating song.').fadeOut(5000)
}

const deleteSongSuccess = function (data) {
  // console.log(data.song)
  $('.my-input').val("")
  // console.log('Signed out succesfully!')
  $('#message_4').show().text('Song successfully deleted.').fadeOut(5000)
}

const deleteSongFailure = function (error) {
  $('.my-input').val("")
  console.log(error)
  // console.log('Failure signing out.')
  $('#message_4').show().text('Failure deleting song.').fadeOut(5000)
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
