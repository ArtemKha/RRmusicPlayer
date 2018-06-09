import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Controls,
  Scrubber,
  Timestamps,
  TrackInformation,
  Volume,
} from './components';
import './Player.scss';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      volume: 75,
      scrubber: 0,
      track: props.track,
    };
  }

  static defaultProps = {
    track: {
      name: 'Odesza - We Were Young',
      duration: 192,
      source: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3',
    },
  };

  static propTypes = {
    setPlayStatus: PropTypes.func.isRequired,
    playStatus: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    track: PropTypes.shape({
      name: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      source: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount = () => {
    this.startTimer();
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.track.name !== nextProps.track.name) {
      const { track, playStatus } = nextProps;

      this.source.src = track.source;
      clearInterval(this.timerUpdater);
      this.audio.currentTime = 0;
      this.startTimer();

      this.audio.load();
      this.audio.play();
      if (playStatus !== 'pause') this.props.setPlayStatus('pause');
      this.setState({ track, scrubber: 0 });
    }

    if (this.props.playStatus !== nextProps.playStatus) {
      this.togglePlay();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentTime === this.props.track.duration) {
      this.changeTrack('forward');
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.timerUpdater);
  };

  handleVolume = (value) => {
    this.setState({ volume: value });
    this.audio.volume = value ? value / 100 : 0;
  };

  changeTrack = (direction) => {
    const { changeTrack, count, index } = this.props;
    let newIndex;

    if (!count) {
      newIndex = 0;
    } else if (direction === 'forward') {
      const nextIndex = index + 1;
      newIndex = nextIndex < count ? nextIndex : 0;
    } else {
      const nextIndex = index - 1;
      const lastIndex = count - 1;
      newIndex = nextIndex >= 0 ? nextIndex : lastIndex;
    }

    changeTrack(newIndex);
  };

  updateTime = (timestamp) => {
    timestamp = Math.floor(timestamp);
    this.setState({ currentTime: timestamp });
  };

  updateScrubber = (percent) => {
    // Set scrubber width
    this.setState({ scrubber: percent });
  };

  onSeek = (e) => {
    const { duration } = this.state.track;
    const width = e.target.getBoundingClientRect().width;
    const percent = e.clientX / width;
    const roundedPercent = Math.round(percent * 100) / 100;
    const seekTo = Math.floor(duration * roundedPercent);
    this.audio.currentTime = seekTo;
  };

  startTimer = () => {
    const audio = this.audio;
    const { updateScrubber, updateTime } = this;

    this.timerUpdater = setInterval(() => {
      const { duration } = this.state.track;
      if (audio) {
        const currentTime = audio.currentTime;

        // Calculate percent of song
        const percent = (currentTime / duration) * 100;
        updateScrubber(percent);
        updateTime(currentTime);
      }
    }, 150);
  };

  togglePlay = () => {
    const { playStatus } = this.props;
    let status;

    if (playStatus === 'play') {
      status = 'pause';
      this.audio.play();
    } else {
      status = 'play';
      this.audio.pause();
    }

    this.props.setPlayStatus(status);
  };

  render() {
    const { volume, scrubber } = this.state;

    return (
      <div className="player_container">
        <div className="player">
          <div className="Header">
            <div className="title">now playing</div>
          </div>
          <TrackInformation track={this.state.track} />
          <Scrubber onSeek={this.onSeek} scrubber={scrubber} />
          <Volume volume={volume} handleVolume={this.handleVolume} />
          <Controls
            isPlaying={this.props.playStatus}
            handlePlayStatus={this.togglePlay}
            changeTrack={this.changeTrack}
          />
          <Timestamps
            duration={this.state.track.duration}
            currentTime={this.state.currentTime}
          />
          <audio
            id="audio"
            ref={(c) => {
              this.audio = c;
            }}
          >
            <source
              ref={(c) => {
                this.source = c;
              }}
              src={this.state.track.source}
            />
          </audio>
        </div>
      </div>
    );
  }
}
