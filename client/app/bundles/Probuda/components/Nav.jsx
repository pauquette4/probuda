import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';
import ReactOnRails from 'react-on-rails';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';

import Projects from './Projects';
import ProjectForm from './ProjectForm';

export default class Nav extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    currentProject: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired,
  };
  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { actions, data, currentProject, railsContext } = this.props;
    const { projects } = data
    var ProjectList = projects.map((projects, index) => {
      var index = index++;
      return <Projects key={projects.id} projects={projects} index={index}
                           {...{actions, data, currentProject, 
                           railsContext}}/>;
    })
    
    return (
       <div className="wrapper">
         <nav className="navbar navbar-inverse navbar-fixed-top top-nav" 
              role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" 
                      data-toggle="collapse"
                      data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <IndexLink to="/dashboard" className="navbar-brand">
                Probuda
              </IndexLink>
            </div>
            <ul className="nav navbar-nav navbar-right">
              
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li className="dropdown">
                <button className="btn btn-warning dropdown-toggle btn-right 
                                   navbar-btn" 
                        type="button" 
                        data-toggle="dropdown">User <b className="caret"></b>
                </button>
                <ul className="dropdown-menu">
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/settings">Settings</Link></li>
                  <li><a data-method="delete" href="/logout">
                            Log out</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse sidebar">
            <ul className="nav navbar-nav side-nav">
              {ProjectList}
              <br />
              <ProjectForm {...{actions, data, railsContext, 
                                currentProject}} />
             </ul>
          </div>
        </nav> 
      </div>
    );
  }
}
