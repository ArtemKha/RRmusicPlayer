/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectTrack = () =>
  createSelector(selectHome, (homeState) => homeState.get('track'));

const makeSelectList = () =>
  createSelector(selectHome, (homeState) => homeState.get('tracks'));

export { selectHome, makeSelectTrack, makeSelectList };
