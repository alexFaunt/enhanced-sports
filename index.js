require('babel-register')({

  plugins: [
    [
      "babel-plugin-webpack-loaders",
      {
        "config": "./webpack/node.config.js",
        "verbose": false
      }
    ]
  ]
})
require('./src/lib/npm-alias')()
require('./src/server')
