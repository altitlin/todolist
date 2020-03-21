import { createStore, combineReducers } from 'redux';
import todolistReducer from './todolist-reducer';

const reducers = combineReducers({ todolist: todolistReducer });

const store = createStore(reducers);

export default store;
