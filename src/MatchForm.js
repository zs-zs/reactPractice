import './MatchForm.css';
import React from 'react';
import { connect } from 'react-redux';
import { createScore, changeNewScore } from './actionCreators';

// function isValid(state) {
// 	const score = { goals1: state.goals1, goals2: state.goals2 };
// 	const [winner, loser] = [score.goals1, score.goals2].sort((a, b) => b - a); // sort descending
// 	return winner == 10 && (0 <= loser && loser < 10);
// }

let MatchForm = React.createClass({
	// validate() {
	// 	if (!isValid(this.state)) {
	// 		this.setState({ validationMessage: 'There should be exactly one winner with 10 scores' })
	// 		return false;
	// 	}
	// 	this.setState({ validationMessage: '' });
	// 	return true;
	// },
	onGoals1Changed(e) {
		this.props.changeNewScore({ goals1: e.target.value, goals2:this.props.newScore.goals2 });
		//this.setState({ goals1: e.target.value }, () => this.validate());
	},
	onGoals2Changed(e) {
		this.props.changeNewScore({ goals1: this.props.newScore.goals1, goals2: e.target.value });
		//this.setState({ goals2: e.target.value }, () => this.validate());
	},
	onSubmit(e) {
		// if (!this.validate())
		// 	return;

		this.props.createScore({
			goals1: this.props.newScore.goals1,
			goals2: this.props.newScore.goals2
		});
	},
	render() {
		return <div>
			<h2>React practice project</h2>
			{/* {this.state.validationMessage ? <div className="validationMessage">{this.state.validationMessage}</div> : undefined} */}
			<input type="text" name="goals1" value={this.props.newScore.goals1} onChange={this.onGoals1Changed} />
			<input type="text" name="goals2" value={this.props.newScore.goals2} onChange={this.onGoals2Changed} />
			<input type="submit" value="Submit" onClick={this.onSubmit} />
		</div>
	}
})

// MatchForm.contextTypes = {
//   color: React.PropTypes.string
// };

MatchForm = connect((state) => ({ newScore: state.newScore }), { createScore, changeNewScore })(MatchForm);

export default MatchForm
