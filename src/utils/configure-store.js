import { createStore, combineReducers } from 'redux'
import * as reducers from '../reducers'

export default (state = {}) => createStore(
  combineReducers(reducers),
  state,
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
)
