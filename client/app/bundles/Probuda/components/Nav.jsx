import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
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
            <IndexLink to="/" className="navbar-brand">Probuda</IndexLink>
          </div>
          <ul className="nav navbar-nav navbar-right">
            
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="dropdown">
              <button className="btn btn-warning dropdown-toggle btn-right navbar-btn" type="button" 
                      data-toggle="dropdown">User <b className="caret"></b></button>
              <ul className="dropdown-menu">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Sign Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse sidebar">
          <ul className="nav navbar-nav side-nav">
            <li><a href="#">Project 1</a></li>
            <li><a href="#">Project 2</a></li>
            <li><a href="#">Project 3</a></li>
          </ul>
        </div>
      </nav>  
    );
  }
}
