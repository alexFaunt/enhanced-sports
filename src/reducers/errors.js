import createReducer from '../utils/create-reducer'
import { ROUTER_MISS } from '../actions/errorActions'

export default createReducer({}, {
  [ROUTER_MISS]: (state) => ({
    ...state,
    global: {
      type: '404'
    }
  })
})
