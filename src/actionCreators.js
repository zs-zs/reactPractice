import * as actionTypes from './actionTypes';

export function createScore(score) {
	return {
		type: actionTypes.CREATE_SCORE,
		score: score
	};
}

export function changeNewScore(newScore) {
	return {
		type: actionTypes.NEW_SCORE_CHANGES,
		newScore: newScore
	};
}
