import React from 'react';
import ReactOnRails from 'react-on-rails';
import ProbudaContainer from '../components/ProbudaContainer';
import { Provider } from 'react-redux';

export default () => {

  const store = ReactOnRails.getStore('ProbudaStore');

  return (
      <Provider store={store}>
        <ProbudaContainer />
      </Provider>
    );
};