import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer';
import rootSaga from '../saga';


/**
 * 1. Setup saga
 * 2. Setup remote-redux-devtools (Ctrl + Cmd + ArrowUp to open remote redux devtools)
 * 3. Setup redux store
 */
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = __DEV__ ? composeWithDevTools : compose;

const store = createStore(
    combineReducers(rootReducer),
    composeEnhancers(
        applyMiddleware(sagaMiddleware),
    )
);
sagaMiddleware.run(rootSaga);

export default store;
