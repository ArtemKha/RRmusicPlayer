/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_TRACK } from './constants';
import tracks from './demo';

// The initial state of the App
const initialState = fromJS({
  track: 0,
  tracks,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TRACK:
      return state.set('track', action.index);
    default:
      return state;
  }
}

export default homeReducer;