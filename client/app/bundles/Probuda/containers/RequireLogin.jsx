import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RequireLoginContainer from './RequireLoginContainer';
import ConfigureStore from '../store/ConfigureStore';



export default class Root extends Component {
  
  
  render() {
    
    const store = ReactOnRails.getStore("ProbudaStore");
    
    return (
      <div className="content-wrapper">
        <Provider store={store}>
          <RequireLoginContainer />
        </Provider>
      </div>
    );
  }
}