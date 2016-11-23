import * as actionTypes from './actionTypes';

export function createScore(goals1, goals2) {
	return {
		type: actionTypes.CREATE_SCORE,
		score: {
			goals1: goals1,
			goals2: goals2
		}
	};
}


