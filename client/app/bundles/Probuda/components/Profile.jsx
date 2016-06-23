import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';
import ProfileContainer from './ProfileContainer';
import ConfigureStore from '../store/ConfigureStore';

export default class Root extends Component {
  render() {
    const store = ReactOnRails.getStore("ProbudaStore");
    return (
      <div className="content-wrapper">
        <Provider store={store}>
          <PofileContainer />
        </Provider>
      </div>
    );
  }
}