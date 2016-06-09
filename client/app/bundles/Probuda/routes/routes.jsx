import ReactOnRails from 'react-on-rails';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import About from '../components/About';
import Contact from '../components/Contact';
import Cover from '../components/Cover';
import Home from '../components/Home';
import Login from '../components/Login';
import Nav from '../components/Nav';
import Probuda from '../containers/Probuda';
import Profile from '../components/Profile';
import Settings from '../components/Settings'
import Signup from '../components/Signup';

export default  (
  
  <Router history={hashHistory}>
    <Route path="/cover" component={Cover} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/" component={Probuda}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/settings" component={Settings} />
    </Route>
  </Router>

);
    