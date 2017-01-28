import {action} from '../utils';

import * as types from './actionType';


export function loadTopStories() {
  return action(types.LOAD_TOP_STORIES);
}

export const loadTopStoriesRequest = {
  REQUEST: () => action(types.LOAD_TOP_STORIES_NETWORK.REQUEST),
  SUCCESS: (response) => action(types.LOAD_TOP_STORIES_NETWORK.SUCCESS, {response}),
  FAILED: () => action(types.LOAD_TOP_STORIES_NETWORK.FAILED),
};

export function loadStory(id) {
  return action(types.LOAD_STORY, {id});
}

export const loadStoryRequest = {
  REQUEST: () => action(types.LOAD_STORY_NETWORK.REQUEST),
  SUCCESS: (response) => action(types.LOAD_STORY_NETWORK.SUCCESS, {response}),
  FAILED: () => action(types.LOAD_STORY_NETWORK.FAILED),
};
