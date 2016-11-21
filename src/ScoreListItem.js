import React from 'react';

const ScoreListItem = (props) => (
	<tr>
		<td>{props.score.id}</td>
		<td>{props.score.goals1}</td>
		<td>{props.score.goals2}</td>
	</tr>
);

ScoreListItem.propTypes = {
	score: React.PropTypes.object.isRequired,
};

export default ScoreListItem;
