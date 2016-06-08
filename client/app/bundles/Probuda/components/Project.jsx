import React from 'react';

export default class Project extends React.Component {
  constructor(props){
    super();
  }
  
  render(){
    const { complete, edit, title } = this.props;
    const icon = complete ? "\u2714" : "\u2716"
    
    if (edit) {
      return (
        <li>
          <input value={title} focus="focused" />
        </li>
      );
    }
    
    return (
      <li>
        <span>{title}</span>
        <span>{icon}</span>
      </li>
      
    );
    
  }
  
}