import './index.css';

import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from './reducers';

import App from './App';
import TableSoccerScores from './TableSoccerScores';
import About from './About';

const store = createStore(rootReducer);

render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={TableSoccerScores} />
				<Route path="scores" component={TableSoccerScores} />
				<Route path="about" component={About} />
			</Route>
		</Router>
	</Provider>
), document.querySelector('#app'))

