import {call, fork, put, takeEvery} from 'redux-saga/effects';

import * as action from './action';
import * as actionTypes from './actionType';
import * as api from '../api';


function* loadTopStories() {
  const {response, error} = yield call(api.fetchTopStories);
  if (!error) {
    yield put(action.loadTopStoriesRequest.SUCCESS(response));
  } else {
    yield put(action.loadTopStoriesRequest.FAILED());
  }
}

function* watchLoadTopStories() {
  yield takeEvery(actionTypes.LOAD_TOP_STORIES, loadTopStories);
}

function* loadStory({id}) {
  const {response, error} = yield call(api.fetchStoryById, id);
  if (!error) {
    yield put(action.loadStoryRequest.SUCCESS(response));
  } else {
    yield put(action.loadStoryRequest.FAILED());
  }
}

function* watchLoadStory() {
  yield takeEvery(actionTypes.LOAD_STORY, loadStory);
}

export default function*() {
  yield [
    fork(watchLoadTopStories),
    fork(watchLoadStory),
  ];
}
