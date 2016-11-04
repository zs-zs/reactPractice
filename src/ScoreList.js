import React from 'react';
import ScoreListItem from './ScoreListItem';

const ScoreList = (props) => (
    <div>
        <h1>Scores:</h1>
        <table>
            <thead>
                <tr>
                    <th> Id </th>
                    <th> Goals1 </th>
                    <th> Goals2 </th>
                </tr>
            </thead>
            <tbody>
                {props.scores.map(score => (
                    <ScoreListItem key={score.id} score={score} />
                ))}
            </tbody>
        </table>
    </div>
);

ScoreList.propTypes = {
    scores: React.PropTypes.array.isRequired
};

export default ScoreList;