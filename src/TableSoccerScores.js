import React from 'react';
import MatchForm from './MatchForm';
import ScoreList from './ScoreList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actionCreators';

let TableSoccerScores = React.createClass({
	propTypes: {
		scores: React.PropTypes.array.isRequired
	},
	getChildContext() {
		return { dependency: 'foo' };
	},
	render() {
		const { dispatch } = this.props;
		const boundActionCreators = bindActionCreators(actionCreators, dispatch);
		return <div>
			<h1>Table soccer scores</h1>
			<MatchForm saveScore={boundActionCreators.createScore} />
			{this.props.scores.length ? <ScoreList scores={this.props.scores} /> : undefined}
		</div>
	}
});

TableSoccerScores.childContextTypes = {
	dependency: React.PropTypes.string
};

TableSoccerScores = connect(state => ({ scores: state.scores }))(TableSoccerScores);

export default TableSoccerScores;
