import React from 'react';

export default class Contact extends React.Component {
  render() {
    const { name } = this.props;
    return (
       <h1 className="contact">Contact</h1>  
    );
  }
}