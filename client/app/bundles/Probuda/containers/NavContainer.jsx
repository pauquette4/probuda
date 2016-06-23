import React, { PropTypes } from 'react';
import Rails_Context from '../components/Rails_Context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nav from '../components/Nav'
import * as ProbudaActions from '../actions/ProbudaActions'

const NavContainer = ({actions, data, currentProject, railsContext}) => {
  return (
      <Nav {...{actions, data, currentProject, railsContext}} />
  );
}

NavContainer.propTypes = {
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
    // budgets: state.budgets
  };
}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators(ProbudaActions, dispatch),

    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);