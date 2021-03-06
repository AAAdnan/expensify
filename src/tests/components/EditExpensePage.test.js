import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    history = { push: jest.fn() };
    editExpense = jest.fn();
    removeExpense = jest.fn();
    wrapper = shallow(<EditExpensePage 
                        editExpense={editExpense} 
                        removeExpense={removeExpense} 
                        history={history} 
                        expense={expenses[1]}
                        />)
})

test('should render EditExpensePage correctly', () => {
    expect (wrapper).toMatchSnapshot();
});

test('should handle EditExpense,', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
})