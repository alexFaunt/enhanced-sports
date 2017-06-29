import { h } from 'preact'
import TodoList from '../TodoList/TodoList'
import AddTodo from '../AddTodo/AddTodo'
import styles from './Home.css'

export default () => (
  <section className={ styles.wrapper }>
    <div>
      <TodoList key="1" />
    </div>
    <div>
      <AddTodo key="2" />
    </div>
  </section>
)
