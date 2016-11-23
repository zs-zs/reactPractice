import * as actionTypes from './actionTypes';

function getDefaultState() {
	return {
		scores: [{
			id: 0,
			goals1: 10,
			goals2: 9
		}]
	};
}

let nextScoreId = 1;

export function rootReducer(state = getDefaultState(), action) {
	switch(action.type) {
		case actionTypes.CREATE_SCORE:
			action.score.id = nextScoreId++; 
			return {
				scores: [...state.scores, action.score]
			}; 
		default: return state;
	}
};