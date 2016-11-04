const webpack = require('webpack')
const path = require('path')
const common = require('./common.config')

module.exports = {
  target: 'web',
  devtool: 'eval-source-maps',
  context: path.resolve(__dirname, '..'),
  entry: {
    bundle: [
      './src/index.jsx'
    ]
  },
  output: {
    filename: './[name].js',
    path: '/',
    publicPath: '/public/generated/'
  },
  resolve: Object.assign({}, common.resolve, {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }),
  plugins: common.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
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
