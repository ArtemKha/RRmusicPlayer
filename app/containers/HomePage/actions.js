import { CHANGE_TRACK, SET_PLAY_STATUS } from './constants';

/**
 * Changes the current index of the track list
 *
 * @param  {index} The new index of the track list
 *
 * @return {object} An action object with a type of CHANGE_TRACK
 */

export function changeTrack(index) {
  return {
    type: CHANGE_TRACK,
    index,
  };
}

export function setPlayStatus(status) {
  return { type: SET_PLAY_STATUS, status };
}
