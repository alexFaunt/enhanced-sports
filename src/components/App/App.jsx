import { h } from 'preact'
import { Match, Miss } from 'react-router'
import { connect } from 'preact-redux'

import Nav from '../Nav/Nav'
import Main from '../Main/Main'
import WidgetMenu from '../WidgetMenu/WidgetMenu'
import Error from '../Error/Error'
import RouterMiss from '../RouterMiss/RouterMiss'

import styles from './App.css'

const mapStateToProps = ({ errors }) => ({ globalError: errors.global })

export default connect(mapStateToProps)(({ globalError }) => (
  <div className={ styles.app }>
    <Nav />
    { !globalError && <Main /> }
    <Match pattern="/" exactly component={ () => null /* TODO hemlet */ } />
    <Match pattern="/menu/add" component={ WidgetMenu } />

    <Miss component={ RouterMiss } />
    <Error error={ globalError } />
  </div>
))
