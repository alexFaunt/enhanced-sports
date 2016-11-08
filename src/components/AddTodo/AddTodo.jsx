import { h } from 'preact'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import styles from './AddTodo.css'
import { addTodo as addTodoAction } from '../../actions/todoActions'

const AddTodoForm = reduxForm({
  form: 'addTodo'
})(({ pristine, submitting, handleSubmit }) => (
  <form onSubmit={ handleSubmit }>
    <label htmlFor="add">
      <span>Add Todo</span>
      <Field name="add" component="input" type="text" />
    </label>
    <button type="submit" disabled={ pristine || submitting }>Submit</button>
  </form>
))

const submitTodo = (addTodo) => ({ add }) => addTodo(add)
const AddTodo = ({ addTodo }) => (
  <div className={ styles.wrapper }>
    <AddTodoForm onSubmit={ submitTodo(addTodo) } />
  </div>
)

export default connect(() => ({}), { addTodo: addTodoAction })(AddTodo)
