import ReactOnRails from 'react-on-rails';
import React, { PropTypes } from 'react';
import Rails_Context from '../components/Rails_Context';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import About from '../components/About';
import BudgetsContainer from '../components/BudgetsContainer';
import Contact from '../components/Contact';
import Cover from '../components/Cover';
import Home from '../components/Home';
import Login from '../components/Login';
import Nav from '../components/Nav';
import Probuda from '../containers/Probuda';
import Profile from '../components/Profile';
import Settings from '../components/Settings'
import Signup from '../components/Signup';

export default class RouterApp extends React.Component{
  
  static PropTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    const { data, railsContext } = this.props;
    const { logged_in } = data;
    const requireLogin = function(nextState, replace) {
      if (!logged_in) {
        replace({
          pathname: '/login',
           state: { nextPathname: nextState.location.pathname}
        })
      }
    } 
    
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Cover} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Probuda} onEnter={requireLogin} >
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project1" component={BudgetsContainer} />
          <Route path="/contact" component={Contact}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/settings" component={Settings}  />
        </Route>
      </Router>
    );
  }
}
