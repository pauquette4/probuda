import ProbudaReducer from './ProbudaReducer';

import projectApp from './ProjectsReducer';
import RailsContextReducer from './RailsContextReducer';

export default {
  probudaData: projectApp,
  railsContext: RailsContextReducer
};