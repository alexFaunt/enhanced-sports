export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const addTodo = (item) => { console.log('ADD TODO', item); return {type: ADD_TODO, item } }

export const removeTodo = (id) => ({ type: REMOVE_TODO, id })
