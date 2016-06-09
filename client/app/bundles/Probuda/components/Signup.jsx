import React from 'react';
import ReactOnRails from 'react-on-rails';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from '../store/ConfigureStore';
import { Link, IndexLink } from 'react-router';
import Signup_Form from './Signup_Form';
import SignupContainer from './SignupContainer';

export default class Signup extends React.Component {
  
  constructor(props){
    super(props);
    
    
    
  }
  
  render () {
    const store = ReactOnRails.getStore("ProbudaStore");
    return (
     <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div className="masthead clearfix">
              <div className="inner">
                <Link to="/cover"><h3 className="masthead-brand">Probuda</h3></Link>
                <nav>
                  <ul className="nav masthead-nav">
                    <li className="active"><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="inner cover">
              <h1 className="cover-heading">Sign up!</h1>
                <div class="row">
                  <div className="col-sm-6 col-sm-offset-3">
                    <Provider store={store}>
                      <SignupContainer />
                    </Provider>
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