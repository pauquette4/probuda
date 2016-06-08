import ReactOnRails from 'react-on-rails';
import RouterApp from './ProbudaRouterApp';
import Cover from '../components/Cover'
import Signup from '../components/Signup'
require('expose?$!expose?jQuery!jquery');

ReactOnRails.register({ RouterApp, Cover, Signup });







