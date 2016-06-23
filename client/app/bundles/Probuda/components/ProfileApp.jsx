import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';




export default class ProfileApp extends React.Component {
  
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired,
  };
  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    <h1>Profile Page</h1>
    );
  }
}



