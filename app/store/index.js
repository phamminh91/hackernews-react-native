import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer';
import rootSaga from '../saga';

/**
 * 1. Setup saga
 * 2. Setup redux store
 */
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers(rootReducer),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
