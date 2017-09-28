'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onGetAllSongs = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getAllSongs(data)
    .then(ui.getAllSongsSuccess)
    .catch(ui.getAllSongsFailure)
}

const onGetOneSong = function (event) {
  const data = getFormFields(this)
  console.log(data.song)
  event.preventDefault()
  api.getOneSong(data)
    .then(ui.getOneSongSuccess)
    .catch(ui.getOneSongFailure)
}

const onAddSong = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.addSong(data)
    .then(ui.addSongSuccess)
    .catch(ui.addSongFailure)
}

const onUpdateSong = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateSong(data)
    .then(ui.updateSongSuccess)
    .catch(ui.updateSongFailure)
}

const onDeleteSong = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.deleteSong(data)
    .then(ui.deleteSongSuccess)
    .catch(ui.deleteSongFailure)
}

const addHandlers2 = function () {
  $('#get-all-songs').on('submit', onGetAllSongs)
  $('#get-song-by-id').on('submit', onGetOneSong)
  $('#add-song').on('submit', onAddSong)
  $('#update-song').on('submit', onUpdateSong)
  $('#delete-song').on('submit', onDeleteSong)
}

module.exports = {
  addHandlers2
}
