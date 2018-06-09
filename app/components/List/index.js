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
    index: PropTypes.number.isRequired,
  };

  render() {
    const { changeTrack, index } = this.props;

    const renderPlItem = (item, i) => {
      const className = i === index ? 'activeTrack' : '';
      return (
        <li
          key={item.name}
          className={className}
          onClick={() => changeTrack(i)}
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
