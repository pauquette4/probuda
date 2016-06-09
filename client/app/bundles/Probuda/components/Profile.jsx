import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import ConfigureStore from '../store/ConfigureStore';
import {setCounter} from '../actions/CounterActions'



export default class Root extends Component {
  
  
  // componentWillMount() {
  //   store.dispatch(setCounter(this.props.counter));
  // }
  render() {
    
    const store = ReactOnRails.getStore("CounterReduxStore");
    
    return (
      <div className="content-wrapper">
        <Provider store={store}>
          <CounterApp />
        </Provider>
      </div>
    );
  }
}