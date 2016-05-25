import React from 'react';
import Nav from '../components/Nav';

export default class Probuda extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Nav />
        {this.props.children}
        
      </div>
    );
  }
}
