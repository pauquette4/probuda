import React, { PropTypes } from 'react';
import Rails_Context from '../components/Rails_Context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Budget_Table from '../components/Budget_Table'
import * as ProbudaActions from '../actions/ProbudaActions'

const BudgetsContainer = ({actions, data, currentProject, railsContext}) => {
  return (
      <Budget_Table {...{actions, data, currentProject, railsContext}} />
  );
}

BudgetsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  railsContext: PropTypes.object.isRequired,
  currentProject: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    data: state.probudaData,
    railsContext: state.railsContext,
    currentProject: state.probudaData.currentProject,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ProbudaActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsContainer);

 