import React from 'react';

export default class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    return (
      <div className="content-wrapper">
        <h1 className="home">Welcome to your dashboard!</h1>
      </div>
    );
  }
}