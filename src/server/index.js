/* eslint-disable global-require */
import koa from 'koa'
import route from 'koa-route'
import path from 'path'
import staticCache from 'koa-static-cache'
import renderer from './renderer'

const isDev = process.env.NODE_ENV === 'production'

const app = koa()

app.use(staticCache(path.join(__dirname, '../../public')), {
  buffer: !isDev,
  maxAge: isDev ? 60 * 60 * 24 : 0,
  gzip: true
})

app.use(route.get('*', renderer))

export default app
