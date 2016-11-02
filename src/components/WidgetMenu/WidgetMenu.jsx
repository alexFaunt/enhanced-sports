import { h } from 'preact'
import { Link } from 'react-router'
import widgetComponents from '../widgets'
import WidgetShowcase from '../WidgetShowcase/WidgetShowcase'
import styles from './WidgetMenu.css'
import connect from '../../utils/connect'

const mapStateToProps = ({ widgetMenu }) => ({
  ...widgetMenu
})
export default connect(mapStateToProps)(({ lifted }) => (
  <div className={ `${styles.wrapper} ${lifted ? styles.lifted : ''}` }>
    <header className={ lifted ? styles.invisible : '' }>
      <h2>Widget Menu</h2>
      <Link className={ styles.close } to="/">Close</Link>
    </header>
    <div className={ styles.widgets }>
      {
        Object.keys(widgetComponents)
          .filter((type) => !lifted || lifted === type)
          .map((type) => (
            <div className={ styles.widget }>
              <WidgetShowcase type={ type } />
            </div>
          ))
      }
    </div>
  </div>
))
