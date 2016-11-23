import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

function getDefaultScores() {
	return [{
		id: 0,
		goals1: 10,
		goals2: 9
	}];
}

function getDefaultNewScore() {
	return {
		goals1: 1,
		goals2: 2
	};
}

export function newScoreReducer(state = getDefaultNewScore(), action) {
	switch(action.type) {
		case actionTypes.NEW_SCORE_CHANGES:
			return action.newScore;
		case actionTypes.CREATE_SCORE:
			return { goals1: 0, goals2: 0};
		default: return state; 
	}
};

let nextScoreId = 1;

export function scoresReducer(state = getDefaultScores(), action) {
	switch(action.type) {
		case actionTypes.CREATE_SCORE:
			action.score.id = nextScoreId++; 
			return [...state, action.score]; 
		default: return state;
	}
};

const rootReducer = combineReducers({
	scores: scoresReducer,
	newScore: newScoreReducer
});

export default rootReducer;