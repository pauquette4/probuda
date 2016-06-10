import React from 'react';
import ReactOnRails from 'react-on-rails';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from '../store/ConfigureStore';
import { Link, IndexLink } from 'react-router';
import Login_Form from './Login_Form';
import LoginContainer from './LoginContainer'

export default class Login extends React.Component {

  
  render () {
    const store = ReactOnRails.getStore("ProbudaStore");
    return (
     <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div className="masthead clearfix">
              <div className="inner">
                <Link to="/"><h3 className="masthead-brand">Probuda</h3></Link>
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
                    <Provider store={store}>
                      <LoginContainer />
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