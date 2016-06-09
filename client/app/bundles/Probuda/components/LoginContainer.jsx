import React, { PropTypes } from 'react';
import Rails_Context from '../components/Rails_Context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login_Form from '../components/Login_Form';
import * as ProbudaActions from '../actions/ProbudaActions'

const LoginContainer = ({actions, data, railsContext}) => {
  return (
      <Login_Form {...{actions, data, railsContext}} />
  );
}

LoginContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);