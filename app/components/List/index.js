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
  };

  render() {
    return (
      <div className="listContainer">
        <ul id="plList">
          {this.props.list.map((item, i) => (
            <li key={item.name}>
              <div className="plItem">
                <span className="plNum">{i}.</span>
                <span className="plTitle">{item.name}</span>
                <span className="plLength">{item.durationString}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="footer">
          <small>RRPlayer ♪ AK ♪ 2018</small>
        </div>
      </div>
    );
  }
}
