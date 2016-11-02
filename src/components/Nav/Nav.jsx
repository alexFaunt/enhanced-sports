import { h } from 'preact'
import { Link } from 'react-router'

import styles from './Nav.css'

export default () => (
  <nav className={ styles.wrapper }>
    <Link className={ styles.button } to="/menu/add">Add a Widget</Link>
  </nav>
)
