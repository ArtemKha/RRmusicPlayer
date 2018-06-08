import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import HomePage from './HomePage';
import { changeTrack } from './actions';
import { makeSelectList, makeSelectTrack } from './selectors';
import reducer from './reducer';

export function mapDispatchToProps(dispatch) {
  return {
    changeTrack: (index) => dispatch(changeTrack(index)),
  };
}

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  track: makeSelectTrack(),
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
