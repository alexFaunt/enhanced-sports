import { omit } from '../lib/utils'
import createReducer from '../utils/create-reducer'
import { ADD_TODO, REMOVE_TODO } from '../actions/todoActions'

const initialState = {
  items: {},
  list: []
}

let count = 0
const createId = () => {
  const id = `item-${count}`
  count += 1
  return id
}

export default createReducer(initialState, {
  [ADD_TODO]: ({ items, list }, { item }) => {
    const id = createId()
    return {
      items: {
        ...items,
        [id]: item
      },
      list: list.concat(id)
    }
  },
  [REMOVE_TODO]: ({ items, list }, target) => ({
    items: omit([target], items),
    list: list.filter((id) => id !== target)
  })
})
