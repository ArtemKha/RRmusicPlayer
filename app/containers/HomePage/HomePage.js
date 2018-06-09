import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from 'components/Player';
import List from 'components/List';
import './HomePage.scss';

export default class HomePage extends Component {
  static propTypes = {
    changeTrack: PropTypes.func.isRequired,
    setPlayStatus: PropTypes.func.isRequired,
    playStatus: PropTypes.string.isRequired,
    track: PropTypes.number.isRequired,
    list: PropTypes.object.isRequired,
  };

  render() {
    const { changeTrack, track, setPlayStatus } = this.props;
    const list = this.props.list.toJS();
    const playStatus = this.props.playStatus;
    const currentTrack = list[track];

    return (
      <div className="homeContainer">
        <Player
          changeTrack={changeTrack}
          count={list.length}
          index={track}
          track={currentTrack}
          setPlayStatus={setPlayStatus}
          playStatus={playStatus}
        />
        <List
          changeTrack={changeTrack}
          list={list}
          index={track}
          setPlayStatus={setPlayStatus}
          playStatus={playStatus}
        />
      </div>
    );
  }
}
