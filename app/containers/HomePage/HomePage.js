/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Player from 'components/Player';
import List from 'components/List';
import './HomePage.scss';

export default class HomePage extends React.PureComponent {
  render() {
    const { changeTrack, track } = this.props;
    const list = this.props.list.toJS();
    const currentTrack = list[track];

    return (
      <div className="homeContainer">
        <Player
          changeTrack={changeTrack}
          count={list.length}
          index={track}
          track={currentTrack}
        />
        <List changeTrack={changeTrack} list={list} index={track} />
      </div>
    );
  }
}
