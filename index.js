var Canvas = require('./src/canvas')
var G = require('./src/g/index')
Canvas.G = G
Canvas.Group = G.Group
Canvas.Shape = {}
Canvas.Shape.Marker = G.Marker
Canvas.Util = require('./src/util/index')
Canvas.Matrix = require('@ali/g-matrix')
module.exports = Canvas
