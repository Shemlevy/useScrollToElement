
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./use-scroll-to-element.cjs.production.min.js')
} else {
  module.exports = require('./use-scroll-to-element.cjs.development.js')
}
