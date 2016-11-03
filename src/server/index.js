import express from 'express'
import path from 'path'
import mustacheExpress from 'mustache-express'
import renderer from './renderer'

// Register '.mustache' extension with The Mustache Express
const server = express()

server.use('/public/scripts', express.static(path.join(__dirname, '../../build')))
server.use('/public/styles', express.static(path.join(__dirname, '../../build')))
server.use('/public', express.static(path.join(__dirname, '../../public')))

server.get('*', renderer)

server.engine('html', mustacheExpress())
server.set('view engine', 'html')
server.set('views', path.resolve(__dirname, './views'))

server.listen(3000, () => {
  console.log('App listening on port 3000!')
})
