import {action} from '../utils';

import * as types from './actionType';


export function loadNowShowing() {
  return action(types.LOAD_NOW_SHOWING);
}

export const loadNowShowingRequest = {
  REQUEST: () => action(types.LOAD_NOW_SHOWING_NETWORK.REQUEST),
  SUCCESS: (response) => action(types.LOAD_NOW_SHOWING_NETWORK.SUCCESS, {response}),
  FAILED: () => action(types.LOAD_NOW_SHOWING_NETWORK.FAILED),
};

export function loadMovie(title) {
  return action(types.LOAD_MOVIE_INFO, {title});
}

export const loadStoryRequest = {
  REQUEST: () => action(types.LOAD_MOVIE_INFO_NETWORK.REQUEST),
  SUCCESS: (response) => action(types.LOAD_MOVIE_INFO_NETWORK.SUCCESS, {response}),
  FAILED: () => action(types.LOAD_MOVIE_INFO_NETWORK.FAILED),
};
