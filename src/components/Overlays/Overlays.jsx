import { h } from 'preact'
import { Link, Match } from 'react-router'

import WidgetMenu from '../WidgetMenu/WidgetMenu'
import styles from './Overlays.css'

export default () => (
  <div className={ styles.wrapper }>
    <Link className={ styles.close } to="/">Close</Link>
    <Match pattern="/menu/add" component={ WidgetMenu } />
  </div>
)
