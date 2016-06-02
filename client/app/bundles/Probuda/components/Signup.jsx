import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Signup extends React.Component {
  render () {
    return (
     <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div className="masthead clearfix">
              <div className="inner">
                <h3 className="masthead-brand">Probuda</h3>
                <nav>
                  <ul className="nav masthead-nav">
                    <li className="active"><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="inner cover">
              <h1 className="cover-heading">This will be the signup page</h1>
            </div>
            <div className="mastfoot">
              <div className="inner">
                <p>Probuda, by Bryan Pauquette.</p>
            </div>
          </div>
                
          </div>
        </div>
      </div> 
    );
  }
}