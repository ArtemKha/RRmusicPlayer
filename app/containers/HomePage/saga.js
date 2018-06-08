/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { trackLoaded, trackLoadingError } from 'containers/HomePage/actions';
import { CHANGE_TRACK } from './constants';

import request from 'utils/request';
import { makeSelectList, makeSelectTrack } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getTrack(action) {
  // Select username from store
  const list = yield select(makeSelectList());
  const { file } = list[action.index];
  const requestURL = `https://archive.org/download/mythium/${file}.mp3`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(trackLoaded(repos, username));
  } catch (err) {
    yield put(trackLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getTrack when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CHANGE_TRACK, getTrack);
}
