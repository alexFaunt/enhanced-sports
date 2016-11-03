import { h, Component } from 'preact'
import connect from '../../utils/connect'
import widgetComponents from '../widgets'
import * as actions from '../../actions/widgetMenuActions'
import Draggable from 'react-draggable'
import styles from './WidgetShowcase.css'

const mapStateToProps = ({ widgetMenu }) => ({
  ...widgetMenu
})
const boundActions = { ...actions }

const getPosFromEvent = (e) => ({ x: e.clientX, y: e.clientY })

class WidgetShowcase extends Component {
  state = {
    lifted: false
  }

  placeWidget = () => {
    const { id, placeWidget } = this.props

    placeWidget(id) // Add data of where to put it

    this.setState({
      lifted: false
    })

    this.context.history.push('/')
  }

  liftWidget = () => {
    const { id, liftWidget } = this.props

    liftWidget(id)

    this.setState({
      lifted: true
    })
  }

  render({ id, type, placeWidget, liftWidget }, { lifted }) {
    const Widget = widgetComponents[type]

    return (
      <div
        className={ styles.widget }
      >
        <span>{ Widget.widgetName }</span>
        <span>{ Widget.description }</span>
        <Draggable
          onStop={ this.placeWidget }
          onStart={ this.liftWidget }
        >
          <Widget showcase lifted={ lifted } />
        </Draggable>
      </div>
    )
  }
}

export default connect(mapStateToProps, boundActions)(WidgetShowcase)
