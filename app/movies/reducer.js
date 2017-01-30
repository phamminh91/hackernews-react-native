import {fromJS} from 'immutable';

import * as types from './actionType';


const initState = fromJS({
  nowShowing: [],
  movies: {},
});

export default function(state=initState, action) {
  switch (action.type) {
    case types.LOAD_NOW_SHOWING_NETWORK.SUCCESS:
      return state.set('nowShowing', fromJS(action.response));

    case types.LOAD_MOVIE_INFO_NETWORK.SUCCESS:
      const item = action.response;
      // return state.setIn(['movies', '' + item.id], fromJS(item));
      return state;

    default:
      return state;
  }
}
