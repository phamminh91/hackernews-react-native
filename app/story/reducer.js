import {fromJS} from 'immutable';

import * as types from './actionType';


const initState = fromJS({
  topStories: [],
  stories: {},
});

export default function(state=initState, action) {
    switch (action.type) {
      case types.LOAD_TOP_STORIES_NETWORK.SUCCESS:
        return state.set('topStories', fromJS(action.response));

      case types.LOAD_STORY_NETWORK.SUCCESS:
        const item = action.response;
        return state.setIn(['stories', '' + item.id], fromJS(item));

      default:
          return state;
    }
}
