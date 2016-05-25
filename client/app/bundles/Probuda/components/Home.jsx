import React from 'react';

export default class Home extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <h1 className="home">Welcome to your dashboard!</h1> 
    );
  }
}