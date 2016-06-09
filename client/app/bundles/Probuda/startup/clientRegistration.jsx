import ReactOnRails from 'react-on-rails';
import RouterApp from './ProbudaRouterApp';
import Cover from '../components/Cover';
import Signup from '../components/Signup';
import Home from '../components/Home';

import CounterReduxStore from '../stores/CounterReduxStore';
import ProbudaStore from '../stores/ProbudaStore';

require('expose?$!expose?jQuery!jquery');

ReactOnRails.register({ RouterApp, Cover, Signup, Home });

ReactOnRails.registerStore({
  CounterReduxStore,
  ProbudaStore
});







