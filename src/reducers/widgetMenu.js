import createReducer from '../utils/create-reducer'
import { LIFT_WIDGET, MOVE_WIDGET, DROP_WIDGET } from '../actions/widgetMenuActions'

const initialState = {
  lifted: null,
  liftedOffset: null,
  liftedPosition: null
}

export default createReducer(initialState, {
  [LIFT_WIDGET]: (state, { lifted, liftedOffset }) => ({
    ...state,
    lifted,
    liftedOffset
  }),
  [MOVE_WIDGET]: (state, { mousePosition }) => ({
    ...state,
    liftedPosition: {
      x: mousePosition.x - state.liftedOffset.x,
      y: mousePosition.y - state.liftedOffset.y
    }
  }),
  [DROP_WIDGET]: () => (initialState)
})
