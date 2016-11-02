import { h, render } from 'preact'
import { BrowserRouter } from 'react-router'
import { Provider } from 'preact-redux'

import configureStore from './utils/configure-store'
import App from './components/App/App'

const state = window.__INITIAL_STATE__ // eslint-disable-line
const store = configureStore(state)

render((
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('app'))
