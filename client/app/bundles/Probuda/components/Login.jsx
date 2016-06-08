import React from 'react'
import { Link, IndexLink } from 'react-router';
import Login_Form from './Login_Form';

export default class Login extends React.Component {
  constructor(){
    super();

  }
  
  render () {
    return (
     <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div className="masthead clearfix">
              <div className="inner">
                <Link to="/cover"><h3 className="masthead-brand">Probuda</h3></Link>
                <nav>
                  <ul className="nav masthead-nav">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li className="active"><Link to="/login">Log In</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="inner cover">
              <h1 className="cover-heading">Log in</h1>
                <div class="row">
                  <div className="col-sm-6 col-sm-offset-3">
                    <Login_Form/>
                  </div>
                </div>
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