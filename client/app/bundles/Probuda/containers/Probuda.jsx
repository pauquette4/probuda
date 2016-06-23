import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';
import NavContainer from './NavContainer'
import ConfigureStore from '../store/ConfigureStore';

export default class Probuda extends React.Component {
  
  render() {
    
    const store = ReactOnRails.getStore("ProbudaStore")
    // connect((state) => state)(NavContainer)
    return (
      <div id="wrapper">
        <Provider store={store}>
          <NavContainer />
        </Provider>
        <Provider store={store}>
        {this.props.children}
        </Provider>
      </div>
    );
  }
}
