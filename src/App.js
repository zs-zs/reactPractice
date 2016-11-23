import React from 'react';
import { Link } from 'react-router';


const App = React.createClass({
	render() {
		return (
			<div>
				<h1>React practice app</h1>
				<ul>
					<li><Link to="/about">About</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
});

export default App;