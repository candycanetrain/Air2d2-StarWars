import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {} ) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, createLogger())
  )
);

export default configureStore;