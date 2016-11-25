import expect from 'expect';

import { createScore, changeNewScore } from '../src/actionCreators';
import { newScoreReducer, scoresReducer } from '../src/reducers';

describe('newScore reducer', () => {
	it('should return the initial state', () => {
		const initialState = newScoreReducer(undefined, {});
		expect(initialState).toEqual({ goals1: 1, goals2: 2 });
	});

	it('should replace the new score if it changes', () => {
		const state = newScoreReducer({ goals1: 4, goals2: 5 }, changeNewScore({ goals1: 8, goals2: 10}));
		expect(state).toEqual({
			goals1: 8,
			goals2: 10
		});
	});

	it('should clear the new score after a score was created', () => {
		const state = newScoreReducer({ goals1: 4, goals2: 5 }, createScore({ goals1: 4, goals2: 5}));
		expect(state).toEqual({
			goals1: 0,
			goals2: 0
		});
	});
});

describe('scores reducer', () => {
	it('should return the initial state', () => {
		const initialState = scoresReducer(undefined, {});
		expect(initialState).toEqual([{ id: 0, goals1: 10, goals2: 9 }]);
	});

	it('should add the score to the scores list', () => {
		const state = scoresReducer([{ id: 0, goals1: 4, goals2: 5 }], createScore({ goals1: 10, goals2: 9}));
		expect(state).toEqual([{ id: 0, goals1: 4, goals2: 5 }, { id: 1, goals1: 10, goals2: 9}]);
	});
});