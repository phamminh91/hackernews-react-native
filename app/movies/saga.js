import {call, fork, put, takeEvery} from 'redux-saga/effects';

import * as action from './action';
import * as actionTypes from './actionType';
import * as api from '../api';


function* loadNowShowing() {
  const {response, error} = yield call(api.fetchTopStories);
  if (!error) {
    yield put(action.loadNowShowingRequest.SUCCESS(response));
  } else {
    yield put(action.loadNowShowingRequest.FAILED());
  }
}

function* watchLoadNowShowing() {
  yield takeEvery(actionTypes.LOAD_NOW_SHOWING, loadNowShowing);
}

function* loadMovie({id}) {
  const {response, error} = yield call(api.fetchStoryById, id);
  if (!error) {
    yield put(action.loadMovie.SUCCESS(response));
  } else {
    yield put(action.loadMovie.FAILED());
  }
}

function* watchLoadMovie() {
  yield takeEvery(actionTypes.LOAD_MOVIE_INFO, loadMovie);
}

export default function*() {
  yield [
    fork(watchLoadNowShowing),
    fork(watchLoadMovie),
  ];
}
