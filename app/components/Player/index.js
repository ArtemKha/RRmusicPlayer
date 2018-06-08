import React, { Component } from 'react';
import {
  Controls,
  Scrubber,
  Timestamps,
  TrackInformation,
  Volume,
} from './components';
import './Player.scss';

export default class Player extends Component {
  state = { playStatus: 'play', currentTime: 0, volume: 75 };

  static defaultProps = {
    track: {
      name: 'We Were Young',
      artist: 'Odesza',
      album: "Summer's Gone",
      year: 2012,
      duration: 192,
      source: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3',
    },
  };

  handleVolume = (value) => {
    this.setState({ volume: value });
    this.audio.volume = value ? value / 100 : 0;
  };

  // changeSource
  changeSource = () => {
    const { trackIndex, list } = this.props;
    const { file } = list[trackIndex];
    const source = `https://archive.org/download/mythium/${file}.mp3`;
    this.setState({ source });
  };

  updateTime = (timestamp) => {
    timestamp = Math.floor(timestamp);
    this.setState({ currentTime: timestamp });
  };

  updateScrubber = (percent) => {
    // Set scrubber width
    const innerScrubber = document.querySelector('.scrubber-progress');
    innerScrubber.style.width = percent;
  };

  togglePlay = () => {
    let status = this.state.playStatus;
    const audio = this.audio;
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
    const { volume } = this.state;

    return (
      <div className="player_container">
        <div className="Player">
          <div className="Header">
            <div className="Title">now playing</div>
          </div>
          <TrackInformation track={this.props.track} />
          <Scrubber />
          <Volume volume={volume} handleVolume={this.handleVolume} />
          <Controls
            isPlaying={this.state.playStatus}
            onClick={this.togglePlay}
          />
          <Timestamps
            duration={this.props.track.duration}
            currentTime={this.state.currentTime}
          />
          <audio
            id="audio"
            ref={(c) => {
              this.audio = c;
            }}
          >
            <source src={this.props.track.source} />
          </audio>
        </div>
      </div>
    );
  }
}
