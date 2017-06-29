import { h } from 'preact'
import { Match, Miss, Link } from 'react-router'

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import NotFound from '../NotFound/NotFound'
import Route from '../Route/Route'
import RedirectPage from '../RedirectPage/RedirectPage'
import Profile from '../Profile/Profile'

import styles from './App.css'

export default () => (
  <div className={ styles.app }>
    <Nav className={ styles.nav } />
    <main className={ styles.main }>
      <Match pattern="/" exactly component={ Home } />
      <Match pattern="/route" exactly component={ Route } />
      <Match pattern="/redirect" exactly component={ RedirectPage } />
      <Match pattern="/profile/:id" exactly component={ Profile } />

      <Link className={ styles.link } to="/profile/jeff">Jeff</Link>
      <Link className={ styles.link } to="/profile/Geoff">Geoff</Link>
      <Link className={ styles.link } to="/profile/12313">No user</Link>
      <Miss component={ NotFound } />
    </main>
  </div>
)
