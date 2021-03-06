import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import SettingsContainer from './SettingsContainer';
import ConfigureStore from '../store/ConfigureStore';



export default class Root extends Component {

  render() {
    
    const store = ReactOnRails.getStore("ProbudaStore");
    
    return (
      <div className="content-wrapper">
        <Provider store={store}>
          <SettingsContainer />
        </Provider>
      </div>
    );
  }
}