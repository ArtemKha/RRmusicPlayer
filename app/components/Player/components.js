import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

export const TrackInformation = (props) => (
  <div className="trackInformation">
    <div className="name">{props.track.name}</div>
  </div>
);

export const Scrubber = ({ onSeek, scrubber }) => (
  <div onClick={onSeek} className="scrubber">
    <div style={{ width: `${scrubber}%` }} className="scrubber-progress" />
  </div>
);

export const Volume = ({ volume, handleVolume }) => {
  const muteStyle = volume < 1 ? 'fa-volume-off' : 'fa-volume-up';
  const muteValue = volume < 1 ? 50 : 0;

  return (
    <div className="volume">
      <i
        className={`volume-mute fa ${muteStyle}`}
        onClick={() => handleVolume(muteValue)}
      />
      <span className="volume-level">
        <em style={{ width: `${volume}%` }} />
      </span>
      <div className="volume-slider">
        <Slider
          min={0}
          max={100}
          tooltip={false}
          value={volume}
          orientation="vertical"
          onChange={handleVolume}
        />
      </div>
    </div>
  );
};

export const Controls = (props) => {
  let classNames;
  if (props.isPlaying == 'pause') {
    classNames = 'fa fa-fw fa-pause';
  } else {
    classNames = 'fa fa-fw fa-play';
  }

  return (
    <div className="controls">
      <div className="controlBox">
        <div
          onClick={() => props.changeTrack('back')}
          className="button button--previous"
        >
          <i className="fa fa-fw fa-backward" />
        </div>
        <div onClick={props.onClick} className="button button--play">
          <i className={classNames} />
        </div>
        <div
          onClick={() => props.changeTrack('forward')}
          className="button button--next"
        >
          <i className="fa fa-fw fa-forward" />
        </div>
      </div>
    </div>
  );
};

export const Timestamps = (props) => {
  const convertTime = (timestamp) => {
    const minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    timestamp = `${minutes}:${seconds}`;
    return timestamp;
  };

  return (
    <div className="timestamps">
      <div className="time time--current">{convertTime(props.currentTime)}</div>
      <div className="time time--total">{convertTime(props.duration)}</div>
    </div>
  );
};
