import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';

import MatchForm from '../src/MatchForm';
import ScoreList from '../src/ScoreList';
import TableSoccerScores from '../src/TableSoccerScores';

describe('TableSoccerScores component', () => {
	it('contains a headline', () => {
		const component = shallow(<TableSoccerScores />);
		const headline = component.find('h1');
		expect(headline.length).toBe(1);
		expect(headline.text()).toBe('Table soccer scores');
	});

	it('display a form', () => {
		const component = shallow(<TableSoccerScores />);
		expect(component.find(MatchForm).length).toBe(1);
	});

	it('inside the form there are some fields', () => {
		const component = mount(<TableSoccerScores />);
		expect(component.find('input[type="text"]').length).toBe(2);
	});

	it('doesnt display the score list if there are no scores', () => {
		const component = shallow(<TableSoccerScores />);
		expect(component.find(ScoreList).length).toBe(0);
	});
	
	it('displays the score list if the scores collection is not empty', () => {
		const component = shallow(<TableSoccerScores />);
		component.setState({ scores: [{goals1: 9, goals2: 10}] }); // something needs to be in the list
		expect(component.find(ScoreList).length).toBe(1);
	});

	it('displays the score in the list after its submitted', () => {
		const component = mount(<TableSoccerScores />);
		component.find('input[name="goals1"]').simulate('change', {target: {value: '10'}});
		component.find('input[name="goals2"]').simulate('change', {target: {value: '9'}});
		component.find('input[type="submit"]').simulate('click');
		expect(component.state('scores')).toEqual([{goals1: '10', goals2: '9', id: 0}]);
		expect(component.find('tbody tr').length).toBe(1);
	});
});
