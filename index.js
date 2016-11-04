/* eslint-disable global-require, import/newline-after-import */

// Extra config on top of babelrc to make the server load CSS files.
require('babel-register')({
  plugins: [
    [
      'babel-plugin-webpack-loaders',
      {
        config: './webpack/node.config.js',
        verbose: false
      }
    ]
  ]
})

// Alias react to preact-compat
require('./src/lib/npm-alias')()

require('./src/server')

// const getServer = () => require('./src/server').default
//
// // Start the server
// const start = (server) => {
//   server.listen(process.env.PORT || 3000, (error) => {
//     if (error) console.error(error)
//     else console.log(`App listening on port ${process.env.PORT || 3000}!`)
//   })
// }
//
// start(getServer())
//
// if (process.env.NODE_ENV !== 'production') {
//   const path = require('path')
//
//   // Env variables for reloading
//   const envPath = path.join(__dirname, '/.env')
//
//   const serverDelete = (server) => {
//     Object.keys(require.cache)
//       .forEach((id) => id.includes('/src/') && delete require.cache[id])
//
//     server.on('close', (err) => {
//       if (err) console.error(err) // TODO logger
//
//       process.env = {}
//       require('dotenv').config({ path: envPath })
//
//       start(getServer())
//     })
//
//     server.close()
//   }
//
//   const chokidar = require('chokidar')
//   const watcher = chokidar.watch([path.join(__dirname, './src/'), envPath])
//
//   watcher.on('ready', () => {
//     watcher.on('change', () => serverDelete(getServer()))
//   })
// }
