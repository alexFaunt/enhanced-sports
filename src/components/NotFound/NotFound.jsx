import { h } from 'preact'
import { Link } from 'react-router'
import { wrapper } from './NotFound.css'

export default () => (
  <div className={ wrapper }>
    <h2>404 - Not Found</h2>
    <p>Well this is awkward...</p>
    <Link to="/">Home</Link>
  </div>
)
