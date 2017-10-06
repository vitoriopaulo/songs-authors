'use strict'
const config = require('../config')
const store = require('../store')

const getAllSongs = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}

const getOneSong = function (data) {
  console.log('This is the id of this song: ' + data.song)
  return $.ajax({
    url: config.apiOrigin + '/songs/' + data.song,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addSong = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateSong = function (data) {
  console.log('here what data.song.id is: ' + data.song.id)
  return $.ajax({
    url: config.apiOrigin + '/songs/' + data.song.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteSong = function (data) {
  console.log('What is the id of this song being deleted? :' + data.song.id)
  return $.ajax({
    url: config.apiOrigin + '/songs/' + data.song.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getAllSongs,
  getOneSong,
  addSong,
  updateSong,
  deleteSong
}
