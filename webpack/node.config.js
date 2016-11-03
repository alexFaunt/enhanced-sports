// This config is used by server side render to load CSS modules

const common = require('./common.config')
const path = require('path')

module.exports = Object.assign({}, common, {
  target: 'node',
  output: { // TODO - don't really care what is output - sooner it doesnt -- maybe when moving to isomorphic it wont
    path: path.resolve(__dirname, '../trash/'),
    libraryTarget: 'commonjs2' // Has to be set to this for node
  }
})
