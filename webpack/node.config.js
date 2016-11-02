const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const postcssInlineComment = require('postcss-inline-comment')
const postcssCalc = require('postcss-calc')
const postcssNested = require('postcss-nested')

const extractCSS = new ExtractTextPlugin({ filename: './build/[name].css', allChunks: true })

module.exports = {
  output: { // TODO - don't really care?!
      path: './dist/',
      libraryTarget: 'commonjs2',
    },
    plugins: [
      extractCSS
    ],

    resolve: {
      modules: ['node_modules', 'src', 'src/shared/components'],
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
      }
    },
    module: {
      loaders: [
        {
          test: /\.(jsx|js)$/,
          loader: 'babel-loader'
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
};


// AD DTHIS TO BABLE RC PLUGINS TO DO CSS STUFF
// [
// 	"babel-plugin-webpack-loaders",
// 	{
// 		"config": "./webpack/node.config.js",
// 		"verbose": false
// 	}
// ]
