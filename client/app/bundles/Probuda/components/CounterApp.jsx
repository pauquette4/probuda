import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter';
import * as CounterActions from '../actions/CounterActions';

const CounterApp = ({ actions, data, railsContext }) => {
  return (
    <Counter {...{actions, data, railsContext}} />  
  );
}

CounterApp.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  railsContext: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.counterData,
    railsContext: state.railsContext,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(CounterActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);