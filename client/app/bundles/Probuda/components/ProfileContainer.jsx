import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProfileApp from './ProfileApp';
import * as ProbudaActions from '../actions/ProbudaActions';

const ProfileContainer = ({ actions, data, railsContext }) => {
  return (
    <ProfileApp {...{actions, data, railsContext}} />  
  );
}

ProfileContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  railsContext: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.probudaData,
    railsContext: state.railsContext,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(CounterActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);