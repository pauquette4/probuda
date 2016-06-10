import React from 'react';
import { Link, IndexLink } from 'react-router';
import ProjectStore from '../stores/ProjectStore';
import * as ProjectActions from '../actions/ProjectActions';
import Project from './Project';

export default class Nav extends React.Component {
  constructor(){
    super();
    this.getProjects = this.getProjects.bind(this);
    this.state = {
      projects: ProjectStore.getAll(),
    };
  }
  
  componentWillMount(){
    ProjectStore.on("change", this.getProjects);
  }
  
  componentWillUnmount(){
    ProjectStore.removeListener("change", this.getProjects);
  }
  
  getProjects(){
    this.setState({
      projects: ProjectStore.getAll(),
    });
  }
  
  createProject() {
    ProjectActions.createProject(Date.now());
  }
  
  render() {
    const { projects } = this.state;
    const ProjectComponents = projects.map((project) => {
      return <li><Link to="#"><Project key={project.id} {...project}/></Link></li>;
    });
    
    
    return (
       <div className="wrapper">
         <nav className="navbar navbar-inverse navbar-fixed-top top-nav" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse"
                      data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <IndexLink to="/dashboard" className="navbar-brand">Probuda</IndexLink>
            </div>
            <ul className="nav navbar-nav navbar-right">
              
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li className="dropdown">
                <button className="btn btn-warning dropdown-toggle btn-right navbar-btn" type="button" 
                        data-toggle="dropdown">User <b className="caret"></b></button>
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
              {ProjectComponents}
              <li>
                <button onClick={this.createProject.bind(this)}>Create!</button>
              </li>
            </ul>
          </div>
        </nav> 
      </div>
    );
  }
}
