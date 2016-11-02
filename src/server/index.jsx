import { createServer } from 'http'
import { h } from 'preact'
import { render } from 'preact-render-to-string'
import { ServerRouter, createServerRenderContext } from 'react-router' // CURRENTLY DOESNT WORK HERE preact-compat FAILING
import { Provider } from 'preact-redux'

import configureStore from '../utils/configure-store'
import App from '../components/App/App'


createServer((req, res) => {
  const store = configureStore({})

  // first create a context for <ServerRouter>, it's where we keep the
  // results of rendering for the second pass if necessary
  const context = createServerRenderContext()

  // render the first time
  let markup = render(
    <ServerRouter
      location={ req.url }
      context={ context }
    >
      <Provider store={ store }>
        <App />
      </Provider>
    </ServerRouter>
  )// DOES THIS DO WHAT I THIKN IT DOES? context

  // get the result
  const result = context.getResult()

  // the result will tell you if it redirected, if so, we ignore
  // the markup and send a proper redirect.
  if (result.redirect) {
    res.writeHead(301, {
      Location: result.redirect.pathname
    })
    res.end()
  }
  else {
    // the result will tell you if there were any misses, if so
    // we can send a 404 and then do a second render pass with
    // the context to clue the <Miss> components into rendering
    // this time (on the client they know from componentDidMount)
    if (result.missed) {
      res.writeHead(404)
      markup = render(
        <ServerRouter
          location={ req.url }
          context={ context }
        >
          <Provider store={ store }>
            <App />
          </Provider>
        </ServerRouter>
      )
    }

    // Need to add to HTML probs?
    res.write(JSON.stringify(markup))
    res.end()
  }

  // How do i hook this up to web server
}).listen(3000)
