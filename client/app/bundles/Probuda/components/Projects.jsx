import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';
import ReactOnRails from 'react-on-rails';
import { Link, IndexLink } from 'react-router';

var initialState = {
  id: 0,
  title: ''
}
export default class Budget extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    currentProject: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired
  };
  
  constructor(props, context) {
    super(props, context);
    const store = ReactOnRails.getStore("ProbudaStore");
    this.state = initialState;
    // this.handleProjectChange = this.handleProjectChange.bind(this);
  }
  
  handleProjectChange(index, id, title) {
    const store = ReactOnRails.getStore("ProbudaStore");
    const { actions } = this.props;
    const { changeProject } = actions;
    changeProject(index, id, title);
  }
  
  render() {
    const { actions, data, railsContext, projects, index } = this.props
    
    return (
      <li>
        <Link to='projects' 
              onClick={this.handleProjectChange.bind(this, index, projects.id, projects.title)} 
              value={projects.index}>
          <span>
            {projects.title}
          </span>
        </Link>
      </li>
    );
  }
}