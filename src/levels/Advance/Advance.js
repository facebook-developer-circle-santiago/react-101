import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Competitions from './components/Competitions'
import Other from './components/Other'
import Teams from './components/Teams'

const Advance = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Competitions</Link></li>
          <li><Link to="/other">Other</Link></li>
        </ul>

        <Route exact path="/" component={Competitions}/>
        <Route path="/other" component={Other}/>
        <Route path="/competition/:id/teams" component={Teams}/>
      </div>
    </Router>
  )
}

export default Advance
