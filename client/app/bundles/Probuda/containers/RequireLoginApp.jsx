import React, { PropTypes } from 'react';
import Rails_Context from '../components/Rails_Context';




export default class RequireLoginApp extends React.Component {
  
  static PropTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired
  }
  
  constructor(props, context) {
    super(props, context);
    
  }
  loggedIn() {
    const { data, railsContext } = this.props;
    const { logged_in } = data;
    return {logged_in}
  }
  render(){
    const { data, railsContext } = this.props;
    const { logged_in } = data;
   
    return(
      <div>
        <h2>{logged_in ? "Yes" : "No"}</h2>
      </div>
        
    );
  } 
}















