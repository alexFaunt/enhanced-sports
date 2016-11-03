import { Component } from 'preact'
import { connect } from 'preact-redux'
import { routerMiss } from '../../actions/errorActions'

class RouterMiss extends Component {
  componentWillMount() {
    this.props.routerMiss()
  }

  render() {
    return null
  }
}

export default connect(() => ({}), { routerMiss })(RouterMiss)
