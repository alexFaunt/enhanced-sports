const path = require('path')
const client = require('./client.config')
const webpack = require('webpack')

module.exports = Object.assign({}, client, {
  output: {
    filename: '[name].js',
    path: './public/generated/'
  },
  plugins: client.plugins.concat([
    new webpack.optimize.UglifyJsPlugin()
  ])
})
