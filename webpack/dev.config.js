const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const postcssInlineComment = require('postcss-inline-comment')
const postcssCalc = require('postcss-calc')
const postcssNested = require('postcss-nested')
const path = require('path')

const extractCSS = new ExtractTextPlugin({ filename: './build/[name].css', allChunks: true })

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
    filename: './build/[name].js',
    path: path.resolve(__dirname, '..')
  },
  resolve: {
    modules: ['node_modules', 'src', 'src/shared/components'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  plugins: [
    extractCSS,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract({
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
          options: {
            // This doesnt work in this version of webpack I think
            // https://github.com/postcss/postcss-loader/issues/125#issuecomment-257127969
            plugins: () => ([
              autoprefixer,
              postcssInlineComment,
              postcssCalc,
              postcssNested
            ])
          }
        })
      }
    ]
  }
}
