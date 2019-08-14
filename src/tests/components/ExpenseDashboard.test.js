import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboard from '../../components/ExpenseDashboard';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render Expense Dashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboard />)
    expect(wrapper).toMatchSnapshot();

});
