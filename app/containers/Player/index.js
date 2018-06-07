import React, { Component } from 'react';
import { Controls, Scrubber, Timestamps, TrackInformation } from './components';
import './Player.scss';

export default class Player extends Component {
  state = { playStatus: 'play', currentTime: 0 };

  static defaultProps = {
    track: {
      name: 'We Were Young',
      artist: 'Odesza',
      album: "Summer's Gone",
      year: 2012,
      duration: 192,
      source: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3'
    }
  };

  updateTime = timestamp => {
    timestamp = Math.floor(timestamp);
    this.setState({ currentTime: timestamp });
  };

  updateScrubber = percent => {
    // Set scrubber width
    const innerScrubber = document.querySelector('.Scrubber-Progress');
    innerScrubber.style.width = percent;
  };

  togglePlay = () => {
    let status = this.state.playStatus;
    const audio = document.getElementById('audio');
    if (status === 'play') {
      status = 'pause';
      audio.play();
      const that = this;
      setInterval(() => {
        const currentTime = audio.currentTime;
        const duration = that.props.track.duration;

        // Calculate percent of song
        const percent = `${(currentTime / duration) * 100}%`;
        that.updateScrubber(percent);
        that.updateTime(currentTime);
      }, 100);
    } else {
      status = 'play';
      audio.pause();
    }
    this.setState({ playStatus: status });
  };

  render() {
    return (
      <div className="Player">
        <div className="Header">
          <div className="Title">Player</div>
        </div>
        <TrackInformation track={this.props.track} />
        <Scrubber />
        <Controls isPlaying={this.state.playStatus} onClick={this.togglePlay} />
        <Timestamps
          duration={this.props.track.duration}
          currentTime={this.state.currentTime}
        />
        <audio id="audio">
          <source src={this.props.track.source} />
        </audio>
      </div>
    );
  }
}
