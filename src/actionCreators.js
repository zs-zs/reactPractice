import * as actionTypes from './actionTypes';

export function createScore(score) {
	return {
		type: actionTypes.CREATE_SCORE,
		score: score
	};
}
