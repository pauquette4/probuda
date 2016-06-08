import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Cover extends React.Component {
  render () {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div className="masthead clearfix">
              <div className="inner">
                <li className="active"><h3 className="masthead-brand">Probuda</h3></li>
                <nav>
                  <ul className="nav masthead-nav">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="inner cover">
              <h1 className="cover-heading">Take Control of Your Production Budgets!</h1>
              <p className="lead">Keep track of every budget with an intuitive layout and auto-generated
              charts and graphs. See where the money is going, and how you can improve.</p>
              <p className="lead">
                <Link to="/signup" className="btn btn-lg btn-default btn-cover">Sign Up</Link>
              </p>
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