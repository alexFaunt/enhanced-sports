// This config is used by server side render to load CSS modules
// And by webpack for the client bundle both dev and prod

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const postcssInlineComment = require('postcss-inline-comment')
const postcssCalc = require('postcss-calc')
const postcssNested = require('postcss-nested')

const extractCSS = new ExtractTextPlugin({ filename: '[name].css', allChunks: true })

module.exports = {
  plugins: [
    extractCSS
  ],
  resolve: {
    modules: ['node_modules', 'src', 'src/shared/components'],
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
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
