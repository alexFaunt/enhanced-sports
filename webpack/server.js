const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./dev.config')

const server = new WebpackDevServer(webpack(config), {
  // webpack-dev-server options
  publicPath: config.output.publicPath,
  stats: { progress: true, colors: true }
})

server.listen(8080, 'localhost', () => { console.log('callback of server start!') })
