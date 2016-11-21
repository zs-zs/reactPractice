import './index.css'

import React from 'react'
import {render} from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App';
import TableSoccerScores from './TableSoccerScores';
import About from './About';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TableSoccerScores} />
      <Route path="scores" component={TableSoccerScores} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.querySelector('#app'))

