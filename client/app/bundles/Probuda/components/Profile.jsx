import React from 'react'

export default class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      name: {name},
      email: {email}
    };
  }
  
  render() {
    
    return(
      <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    );
  }
}