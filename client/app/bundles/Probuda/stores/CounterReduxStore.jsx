import { combineReducers, applyMiddleware, createStore } from 'redux';
import middleware from 'redux-thunk';

import Reducers from '../reducers/CounterReducersIndex';

/*
 *  Export a function that takes the props and returns a Redux store
 *  This is used so that 2 components can have the same store.
 */
export default (props, railsContext) => {
  const combinedReducer = combineReducers(Reducers);
  props.railsContext = railsContext;
  return applyMiddleware(middleware)(createStore)(combinedReducer, props);
};