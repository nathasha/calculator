import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import cellReducer from './cellReducer';

const store = createStore(cellReducer);

export default store;
