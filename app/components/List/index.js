import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.scss';

export default class List extends Component {
  state = { search: '' };

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

  getListBySearch = () => {
    const { search } = this.state;
    const { list } = this.props;

    if (search && search.trim().length > 2) {
      return list.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return list;
  };

  clearSearch = () => {
    this.setState({
      search: '',
    });
  };

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { index } = this.props;
    const { search } = this.state;

    const searchStyle = search ? 'searchClear' : '';

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
        <div className="searchBox">
          <input
            type="text"
            name="search"
            className="searchText"
            placeholder="Search"
            value={search}
            onChange={this.handleSearch}
          />
          <input
            type="button"
            name="searchButton"
            className={`searchButton ${searchStyle}`}
            onClick={this.clearSearch}
          />
        </div>
        <ul className="plList">{this.getListBySearch().map(renderPlItem)}</ul>
      </div>
    );
  }
}
