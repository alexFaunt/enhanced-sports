import { h } from 'preact'
import { connect } from 'react-redux'
import styles from './TodoList.css'

const mapStateToProps = ({ todos: { items, list } }) => ({ items, list })
export default connect(mapStateToProps)(({ items, list }) => {
  if (!list.length) {
    return (
      <span>No todos yet! :(</span>
    )
  }

  return (
    <div className={ styles.wrapper }>
      <p className={ styles.intro }>Todos:</p>
      <div className={ styles.todos }>
        {
          list.map((todo) => (
            <div>
              <span className={ styles.todo }>{ items[todo] }</span>
            </div>
          ))
        }
      </div>
    </div>
  )
})
