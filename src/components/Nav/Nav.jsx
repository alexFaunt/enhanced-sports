import { h } from 'preact'
import { Link } from 'react-router'

import styles from './Nav.css'

export default ({ className }) => (
  <nav className={ `${styles.nav} ${className}` }>
    <Link className={ styles.link } to="/">Home</Link>
    <Link className={ styles.link } to="/route">A router page</Link>
    <Link className={ styles.link } to="/redirect">A redirect page</Link>
    <Link className={ styles.link } to="/miss">404 page</Link>
  </nav>
)
