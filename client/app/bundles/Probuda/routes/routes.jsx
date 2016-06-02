import ReactOnRails from 'react-on-rails';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Probuda from '../containers/Probuda';
import Cover from '../components/Cover';
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Signup from '../components/Signup';

export default  (
  
  <Router history={hashHistory}>
    <Route path="/cover" component={Cover} />
    <Route path="/signup" component={Signup} />
    <Route path="/" component={Probuda}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>

);
    