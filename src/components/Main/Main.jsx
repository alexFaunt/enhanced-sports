import { h } from 'preact'
import { connect } from 'preact-redux'
import widgetComponents from '../widgets'
import styles from './Main.css'

const mapStateToProps = ({ layouts, app }) => ({
  layout: layouts[app.selectedLayout]
})
export default connect(mapStateToProps)(({ layout }) => (
  <main className={ styles.main }>
    <span>TODO Videos</span>
    {
      layout.widgets.map(({ type, position: { x: left, y: top } }) => {
        const Widget = widgetComponents[type]
        return (
          <div className={ styles.widget } style={ { top, left } }>
            <Widget />
          </div>
        )
      })
    }
  </main>
))
