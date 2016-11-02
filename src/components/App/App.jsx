import { h } from 'preact'
import { Match } from 'react-router'

import Nav from '../Nav/Nav'
import Main from '../Main/Main'
import WidgetMenu from '../WidgetMenu/WidgetMenu'

import styles from './App.css'

export default () => (
  <div className={ styles.app }>
    <Nav />
    <Main />
    <Match pattern="/menu/add" component={ WidgetMenu } />
  </div>
)
