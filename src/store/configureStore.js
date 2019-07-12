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


    store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt:1000}));
    store.dispatch(addExpense({ description: 'Gas bill', amount: 100, createdAt:1000}));
    store.dispatch(setTextFilter('gas'));

    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    
    return store; 
};  



