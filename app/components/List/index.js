import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './List.scss';

export default class List extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        durationString: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    changeTrack: PropTypes.func.isRequired,
    setPlayStatus: PropTypes.func.isRequired,
    playStatus: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };

  handleTrackClick = (i) => {
    const { setPlayStatus, playStatus, changeTrack, index } = this.props;
    changeTrack(i);

    // check if track active
    if (index === i) {
      const nextStatus = playStatus === 'play' ? 'pause' : 'play';
      setPlayStatus(nextStatus);
    }
  };

  render() {
    const { index } = this.props;

    const renderPlItem = (item, i) => {
      const className = i === index ? 'activeTrack' : '';
      return (
        <li
          key={item.name}
          className={className}
          onClick={() => this.handleTrackClick(i)}
        >
          <div className="plItem">
            <span className="plNum">{i + 1}.</span>
            <span className="plTitle">{item.name}</span>
            <span className="plLength">{item.durationString}</span>
          </div>
        </li>
      );
    };

    return (
      <div className="listContainer">
        <ul className="plList">{this.props.list.map(renderPlItem)}</ul>
        <div className="footer">
          <small>RRPlayer ♪ AK ♪ 2018</small>
        </div>
      </div>
    );
  }
}
