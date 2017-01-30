import {fork} from 'redux-saga/effects';

import storySaga from './story/saga';
import movieSaga from './movies/saga';


export default function*() {
  yield* [
    fork(storySaga),
    fork(movieSaga),
  ];
}
