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
	saveScore(score) {
		this.props.dispatch(actionCreators.createScore(score.goals1, score.goals2));
	},
	render() {
		return <div>
			<h1>Table soccer scores</h1>
			<MatchForm saveScore={this.saveScore} />
			{this.props.scores.length ? <ScoreList scores={this.props.scores} /> : undefined}
		</div>
	}
})


TableSoccerScores.childContextTypes = {
	dependency: React.PropTypes.string
};

TableSoccerScores = connect(state => ({ scores: state.scores }))(TableSoccerScores);

export default TableSoccerScores;
