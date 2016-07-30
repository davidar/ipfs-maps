var $ = require('jquery')
var mapboxgl = require('mapbox-gl')
var style = require('./bright.json')

mapboxgl.accessToken = 'NOT-REQUIRED-WITH-YOUR-VECTOR-TILES-DATA'

var baseURL = window.location.origin + window.location.search.slice(1)

$.getJSON(baseURL + '/metadata.json', function (metadata) {
  metadata.type = 'vector'
  metadata.profile = 'mercator'
  metadata.scheme = 'xyz'
  metadata.tilejson = '2.0.0'
  metadata.tiles = [baseURL + '/{z}/{x}/{y}.pbf']
  metadata.minzoom = parseInt(metadata.minzoom, 10)
  metadata.maxzoom = parseInt(metadata.maxzoom, 10)
  style.sources.mapbox = metadata
  window.map = new mapboxgl.Map({
    container: 'map',
    style: style,
    zoom: 1,
    center: [0, 0],
    hash: true
  })
  window.map.addControl(new mapboxgl.Navigation())
})
