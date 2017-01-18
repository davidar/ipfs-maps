var $ = require('jquery')
var mapboxgl = require('mapbox-gl')

mapboxgl.accessToken = 'NOT-REQUIRED-WITH-YOUR-VECTOR-TILES-DATA'

var rootURL = window.location.origin + window.location.pathname
var baseURL = window.location.origin + window.location.search.slice(1)

var style = require('./pub/osm-liberty/style.json')
style.sprite = rootURL + '/osm-liberty/sprites/osm-liberty'
style.glyphs = rootURL + '/font-glyphs/glyphs/{fontstack}/{range}.pbf'
style.sources.natural_earth_shaded_relief.tiles = [
  rootURL + '/naturalearthtiles/tiles/natural_earth_2_shaded_relief.raster/{z}/{x}/{y}.png'
]

$.getJSON(baseURL + '/metadata.json', function (metadata) {
  metadata.type = 'vector'
  metadata.profile = 'mercator'
  metadata.scheme = 'xyz'
  metadata.tilejson = '2.0.0'
  metadata.tiles = [baseURL + '/{z}/{x}/{y}.pbf']
  metadata.minzoom = parseInt(metadata.minzoom, 10)
  metadata.maxzoom = parseInt(metadata.maxzoom, 10)
  style.sources.openmaptiles = metadata
  window.map = new mapboxgl.Map({
    container: 'map',
    style: style,
    zoom: 1,
    center: [0, 0],
    hash: true
  })
})
