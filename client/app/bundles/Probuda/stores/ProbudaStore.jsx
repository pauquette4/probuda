import { combineReducers, applyMiddleware, createStore } from 'redux';
import middleware from 'redux-thunk';
import configureStore from '../store/ConfigureStore'
import Reducers from '../reducers/ProbudaReducersIndex';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
/*
 *  Export a function that takes the props and returns a Redux store
 *  This is used so that 2 components can have the same store.
 */
export default (props, railsContext) => {
  const combinedReducer = combineReducers(Reducers);
  props.railsContext = railsContext;
  const combinedProps = configureStore(props, railsContext);
  return applyMiddleware(middleware, logger)(createStore)(combinedReducer, props);
};