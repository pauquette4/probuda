import React from 'react';


export default class Home extends React.Component {

  
  constructor(props, context) {
    super(props, context);
   
   
   
  }
  
  
  render() {
   
    var loginIcon = this.props.logged_in ?
    <li><a href="/login"><span className="glyphicon glyphicon-user"></span>
                          Sign Up</a></li> :
    <li><a rel="nofollow" data-method="delete" href="/logout"><span className="glyphicon glyphicon-user"></span>
                          Sign Out</a></li>;
                          
    
    
    return (
      <div className="content-wrapper">
        <h1 className="home">Welcome to your dashboard!</h1>
        {loginIcon}
        
      </div>
    );
  }
}