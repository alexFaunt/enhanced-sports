import { h } from 'preact'
import { Link } from 'react-router'

import styles from './Nav.css'

export default () => (
  <nav className={ styles.wrapper }>
    <Link className={ styles.button } to="/">Home</Link>
    <Link className={ styles.button } to="/route">A router page</Link>
    <Link className={ styles.button } to="/redirect">A redirect page</Link>
    <Link className={ styles.button } to="/miss">404 page</Link>
  </nav>
)
