import { h, Component } from 'preact'
import connect from '../../utils/connect'
import widgetComponents from '../widgets'
import * as actions from '../../actions/widgetMenuActions'
import styles from './WidgetShowcase.css'
import { Redirect } from 'react-router'

const mapStateToProps = ({ widgetMenu }) => ({
  ...widgetMenu
})
const boundActions = { ...actions }

class WidgetShowcase extends Component {
  state = {
    exit: false
  }

  moveWidget = (e) => {
    this.props.moveWidget({ x: e.clientX, y: e.clientY })
  }

  dropWidget = () => {
    document.removeEventListener('mousemove', this.moveWidget)
    document.removeEventListener('mouseup', this.dropWidget)
    this.props.dropWidget()

    this.setState({ exit: true })
  }

  liftWidget = (e) => {
    const { type, liftWidget } = this.props
    liftWidget(type, { x: e.clientX, y: e.clientY })

    document.addEventListener('mousemove', this.moveWidget)
    document.addEventListener('mouseup', this.dropWidget)
  }

  render({ type, lifted, liftedPosition }, { exit }) {
    const scale = lifted ? 'scale(1.15)' : ''
    const pos = liftedPosition ? `translate3d(${liftedPosition.x}px, ${liftedPosition.y}px, 0)` : ''
    const style = lifted ? { transform: `${scale} ${pos}` } : null

    const Widget = widgetComponents[type]

    if (exit) return <Redirect to="/" />

    return (
      <div
        className={ `${styles.widget} ${liftedPosition ? styles.lifted : ''}` }
        style={ style }
        onMouseDown={ this.liftWidget }
      >
        <span>{ Widget.widgetName }</span>
        <span>{ Widget.description }</span>
        <Widget showcase />
      </div>
    )
  }
}

export default connect(mapStateToProps, boundActions)(WidgetShowcase)
