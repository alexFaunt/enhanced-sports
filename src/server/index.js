/* eslint-disable global-require */
import express from 'express'
import path from 'path'
import mustacheExpress from 'mustache-express'
import renderer from './renderer'

// Register '.mustache' extension with The Mustache Express
const server = express()

// Proxy through to dev server
if (process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  const config = require('../../webpack/dev.config.js')

  server.use(webpackDevMiddleware(webpack(config), {
    publicPath: config.output.publicPath,
    stats: { colors: true, chunks: false }
  }))
}

server.use('/public', express.static(path.join(__dirname, '../../public')))

server.get('*', renderer)

server.engine('html', mustacheExpress())
server.set('view engine', 'html')
server.set('views', path.resolve(__dirname, './views'))

server.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${process.env.PORT || 3000}!`)
})
