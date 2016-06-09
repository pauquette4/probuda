import React, { PropTypes } from 'react';
import Rails_Context from '../components/Rails_Context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Signup_Form from '../components/Signup_Form'
import * as ProbudaActions from '../actions/ProbudaActions'

const SignupContainer = ({actions, data, railsContext}) => {
  return (
      <Signup_Form {...{actions, data, railsContext}} />
  );
}

SignupContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);

 