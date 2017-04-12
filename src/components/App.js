import React from 'react'
import { Router, Route, browserHistory, Link } from 'react-router'
import Login from './Login'
import Home from './Home'

const App = () => (
  <div>
    <Router history={browserHistory}>    
      <Route path="/" component={Login} />
      <Route path="/arman" component={Home} />
    </Router>
  </div>
)

export default App
