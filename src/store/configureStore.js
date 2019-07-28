import { createStore, combineReducers } from 'redux';
import { addExpense, removeExpense, editExpense } from '../actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../actions/filters';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import getVisibleExpenses from '../selectors/expenses';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );

    return store; 
};  



