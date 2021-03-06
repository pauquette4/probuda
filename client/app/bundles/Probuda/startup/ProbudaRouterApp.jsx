import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from '../store/ConfigureStore';
import routes from '../routes/routes';
import RouterContainer from '../containers/RouterContainer';



export default class Router extends Component {
  
  
  render() {
    
    const store = ReactOnRails.getStore("ProbudaStore");
    const { data, railsContext } = this.props;
    return (
        <Provider store={store}>
          <RouterContainer  />
        </Provider>
    );
  }
}
  
