const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const common = require('./common.config')

const envFile = new Buffer(fs.readFileSync(path.resolve(__dirname, '../.env'), 'utf8'))
const env = require('dotenv').parse(envFile)

module.exports = {
  target: 'web',
  devtool: 'eval-source-maps',
  context: path.resolve(__dirname, '..'),
  entry: {
    bundle: [
      './src/index.jsx'
    ]
  },
  resolve: Object.assign({}, common.resolve, {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }),
  plugins: common.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    })
  ]),
  module: {
    loaders: common.module.loaders.concat([
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      }
    ])
  }
}
