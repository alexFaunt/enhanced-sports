import createReducer from '../utils/create-reducer'
import { POSITION } from '../constants/widgets'

// TODO get this from somewhere
const layouts = {
  default: {
    widgets: [{
      type: POSITION,
      position: { x: 10, y: 10 }
    }]
  }
}

export default createReducer(layouts, {

})
