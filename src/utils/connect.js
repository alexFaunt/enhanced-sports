import { connect } from 'preact-redux'
import { bindActionCreators } from 'redux'

const bindActions = (actions) => (dispatch) => ({ ...bindActionCreators(actions, dispatch) })

export default (mapStateToProps, actions) => actions
  ? connect(mapStateToProps, bindActions(actions)) :
  connect(mapStateToProps)
