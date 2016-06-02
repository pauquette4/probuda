import React from 'react';

export default class Contact extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="content-wrapper">
       <h1>Contact</h1>  
      </div>
    );
  }
}