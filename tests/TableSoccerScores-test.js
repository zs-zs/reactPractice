import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';

import MatchForm from '../src/MatchForm';
import ScoreList from '../src/ScoreList';
import TableSoccerScores from '../src/TableSoccerScores';
import { createScore } from '../src/actionCreators';
import * as actionTypes from '../src/actionTypes';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [];
let mockStore;
let TableSoccerScores2;

describe('TableSoccerScores component', () => {
	beforeEach(() => {
		mockStore = configureStore(middlewares)({ scores: [], newScore: { goals1: 10, goals2: 1 } });
	});

	it('contains a headline', () => {
		const component = shallow(<TableSoccerScores.WrappedComponent scores={[]} />);
		const headline = component.find('h1');
		expect(headline.length).toBe(1);
		expect(headline.text()).toBe('Table soccer scores');
	});

	it('display a form', () => {
		const component = shallow(<TableSoccerScores.WrappedComponent scores={[]} />);
		expect(component.find(MatchForm).length).toBe(1);
	});

	it('inside the form there are some fields', () => {
		const component = mount(<Provider store={mockStore}><TableSoccerScores /></Provider>);
		expect(component.find('input[type="text"]').length).toBe(2);
	});

	it('doesnt display the score list if there are no scores', () => {
		const component = shallow(<TableSoccerScores.WrappedComponent scores={[]} />);
		expect(component.find(ScoreList).length).toBe(0);
	});
	
	it('displays the score list if the scores collection is not empty', () => {
		const scores = [{goals1: 9, goals2: 10}]; // something needs to be in the list
		const component = shallow(<TableSoccerScores.WrappedComponent scores={scores} />);
		expect(component.find(ScoreList).length).toBe(1);
	});

	it('fires score change and creation actions', () => {
		const component = mount(<Provider store={mockStore}><TableSoccerScores /></Provider>);
		component.find('input[name="goals1"]').simulate('change', {target: {value: '10'}});
		component.find('input[name="goals2"]').simulate('change', {target: {value: '9'}});
		component.find('input[type="submit"]').simulate('click');

		var actions = mockStore.getActions();

		var changeActions = actions.filter(item => item.type === actionTypes.NEW_SCORE_CHANGES);
		expect(changeActions.length).toBe(2);

		var createScore = actions.filter(item => item.type === actionTypes.CREATE_SCORE);
		expect(createScore).toExist();
	});
});
