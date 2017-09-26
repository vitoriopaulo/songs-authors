'use strict'
const config = require('../config')
const store = require('../store')

const getAllSongs = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'GET',
    data
  })
}

const getOneSong = function (data) {
  console.log(config.apiOrigin)
  return $.ajax({
    url: config.apiOrigin + '/songs/' + store.song.id,
    method: 'GET',
    data
  })
}

const addSong = function () {
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    'song': {
      'title': ' ',
      'year': ' ',
      'authors': ' '
    }
  })
}

const updateSong = function () {
  return $.ajax({
    url: config.apiOrigin + '/songs' + store.song.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    'song': {
      'id': store.song.id,
      'title': ' ',
      'year': ' ',
      'authors': ' '
    }
  })
}

const deleteSong = function () {
  return $.ajax({
    url: config.apiOrigin + '/songs/' + store.song.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    'song': {
      'id': store.song.id
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
