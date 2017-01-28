import {
  combineReducers,
  createStore,
} from 'redux';

import rootReducer from '../reducer';


const store = createStore(combineReducers(rootReducer), {});

export default store;
