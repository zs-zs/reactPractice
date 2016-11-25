import './MatchForm.css';
import React from 'react';
import { connect } from 'react-redux';
import { createScore, changeNewScore } from './actionCreators';

function isValid(score) {
	const [winner, loser] = [score.goals1, score.goals2].sort((a, b) => b - a); // sort descending
	return winner == 10 && (0 <= loser && loser < 10);
}

let MatchForm = React.createClass({
	validate(score) {
		if (!isValid(score)) {
			this.setState({ validationMessage: 'There should be exactly one winner with 10 scores' })
			return false;
		}
		this.setState({ validationMessage: '' });
		return true;
	},
	getInitialState() {
		return { validationMessage: '' };
	},
	onGoals1Changed(e) {
		const score = { goals1: e.target.value, goals2:this.props.newScore.goals2 };
		this.props.changeNewScore(score);
		this.validate(score);
	},
	onGoals2Changed(e) {
		const score = { goals1: this.props.newScore.goals1, goals2: e.target.value };
		this.props.changeNewScore(score);
		this.validate(score);
	},
	onSubmit(e) {
		if (!this.validate(this.props.newScore))
			return;

		this.props.createScore({
			goals1: this.props.newScore.goals1,
			goals2: this.props.newScore.goals2
		});
	},
	render() {
		return <div>
			<h2>React practice project</h2>
			{this.state.validationMessage ? <div className="validationMessage">{this.state.validationMessage}</div> : undefined}
			<input type="text" name="goals1" value={this.props.newScore.goals1} onChange={this.onGoals1Changed} />
			<input type="text" name="goals2" value={this.props.newScore.goals2} onChange={this.onGoals2Changed} />
			<input type="submit" value="Submit" onClick={this.onSubmit} />
		</div>
	}
})

MatchForm = connect((state) => ({ newScore: state.newScore }), { createScore, changeNewScore })(MatchForm);

export default MatchForm
