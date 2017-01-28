import {fork} from 'redux-saga/effects';

import storySaga from './story/saga';


export default function*() {
  yield* [
      fork(storySaga),
  ];
}
