import { h } from 'preact'
import { render } from 'preact-render-to-string'
import { ServerRouter, createServerRenderContext } from 'react-router'
import { Provider } from 'preact-redux'

import configureStore from '../utils/configure-store'
import App from '../components/App/App'

const renderApp = (context, store, location) => render(
  <ServerRouter
    location={ location }
    context={ context }
  >
    <Provider store={ store }>
      <App />
    </Provider>
  </ServerRouter>
)

export default (req, res) => {
  const store = configureStore({})

  // first create a context for <ServerRouter>, it's where we keep the
  // results of rendering for the second pass if necessary
  const context = createServerRenderContext()

  // render the first time
  const markup = renderApp(context, store, req.url)

  // get the result
  const { redirect, missed } = context.getResult()

  // the result will tell you if it redirected, if so, we ignore
  // the markup and send a proper redirect.
  if (redirect) return res.redirect(301, redirect.pathname)

  // the result will tell you if there were any misses, if so
  // we can send a 404 and then do a second render pass with
  // the context to clue the <Miss> components into rendering
  // this time (on the client they know from componentDidMount)
  if (missed) {
    return res.status(404).render('index', {
      markup: renderApp(context, store, req.url),
      initialState: JSON.stringify(store.getState())
    })
  }

  // Need to add to HTML probs?
  return res.render('index', {
    markup,
    initialState: JSON.stringify(store.getState())
  })
}
