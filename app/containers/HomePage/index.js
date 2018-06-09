import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import HomePage from './HomePage';
import { changeTrack, setPlayStatus } from './actions';
import {
  makeSelectList,
  makeSelectTrack,
  makeSelectPlayStatus,
} from './selectors';
import reducer from './reducer';

export function mapDispatchToProps(dispatch) {
  return {
    changeTrack: (index) => dispatch(changeTrack(index)),
    setPlayStatus: (status) => dispatch(setPlayStatus(status)),
  };
}

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  track: makeSelectTrack(),
  playStatus: makeSelectPlayStatus(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect
)(HomePage);
