import React from 'react'
import MatchForm from './MatchForm';
import ScoreList from './ScoreList';

let currentId = 0;

let TableSoccerScores = React.createClass({
  getChildContext() {
    return { dependency: 'foo' };
  },
  getInitialState() {
      return { scores: [] };
  },
  saveScore(score) {
    score.id = currentId++;
    this.state.scores.push(score);
    this.setState({scores: this.state.scores});
  },
  render() {
    return <div>
      <h1>Table soccer scores</h1>
      <MatchForm saveScore={this.saveScore} />
      {this.state.scores.length ? <ScoreList scores={this.state.scores} /> : undefined}
    </div>
  }
})


TableSoccerScores.childContextTypes = {
  dependency: React.PropTypes.string
};


export default TableSoccerScores;
