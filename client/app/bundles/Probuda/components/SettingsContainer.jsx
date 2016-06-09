import React, { PropTypes } from 'react';
import Rails_Context from '../components/Rails_Context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Settings_Form from '../components/Settings_Form'
import * as ProbudaActions from '../actions/ProbudaActions'

const SettingsContainer = ({actions, data, railsContext}) => {
  return (
      <Settings_Form {...{actions, data, railsContext}} />
  );
}

SettingsContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);

 