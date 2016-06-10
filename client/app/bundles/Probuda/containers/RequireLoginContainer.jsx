import React, { PropTypes } from 'react';
import Rails_Context from '../components/Rails_Context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RequireLoginApp from './RequireLoginApp'
import * as ProbudaActions from '../actions/ProbudaActions'

const RequireLoginContainer = ({actions, data, railsContext}) => {
  return (
      <RequireLoginApp {...{actions, data, railsContext}} />
  );
}

RequireLoginContainer.propTypes = {
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
  return { actions: bindActionCreators(ProbudaActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(RequireLoginContainer);

 