import { fromJS } from 'immutable';

import { CHANGE_TRACK, SET_PLAY_STATUS } from './constants';
import tracks from './demo';

// The initial state of the HomePage
const initialState = fromJS({
  track: 0,
  tracks,
  playStatus: 'play',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TRACK:
      return state.set('track', action.index);
    case SET_PLAY_STATUS:
      return state.set('playStatus', action.status);
    default:
      return state;
  }
}

export default homeReducer;
