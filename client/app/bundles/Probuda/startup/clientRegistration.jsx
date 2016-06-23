import ReactOnRails from 'react-on-rails';
import Router from './ProbudaRouterApp';
import Cover from '../components/Cover';
import Signup from '../components/Signup';
import Home from '../components/Home';

import ProbudaStore from '../stores/ProbudaStore';

require('expose?$!expose?jQuery!jquery');

ReactOnRails.register({ Router, Cover, Signup, Home });


ReactOnRails.registerStore({
  ProbudaStore,
});







