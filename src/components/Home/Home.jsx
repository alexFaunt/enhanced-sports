import { h } from 'preact'
import TodoList from '../TodoList/TodoList'
import AddTodo from '../AddTodo/AddTodo'
import styles from './Home.css'

export default () => (
  <section className={ styles.wrapper }>
    <TodoList />
    <AddTodo />
  </section>
)
