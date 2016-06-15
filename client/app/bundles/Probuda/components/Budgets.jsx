import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';
import BudgetsContainer from './BudgetsContainer';
import ConfigureStore from '../store/ConfigureStore';

export default class Budgets extends Component {
  
  render() {
    const store = ReactOnRails.getStore("ProbudaStore");
    
    return (
      <div className="content-wrapper">
        <Provider store={store}>
          <BudgetsContainer />
        </Provider>
      </div>
    );
  }
  
}