import React from 'react';
import ReactOnRails from 'react-on-rails';
import CounterApp from '../components/HelloWorldContainer';
import { Provider } from 'react-redux';

/*
 *  Export a function that returns a ReactComponent, depending on a store named SharedReduxStore.
 *  This is used for the client rendering hook after the page html is rendered.
 *  React will see that the state is the same and not do anything.
 */
export default () => {

  // This is where we get the existing store.
  const store = ReactOnRails.getStore('CounterReduxStore');

  return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
};